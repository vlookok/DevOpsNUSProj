// This file will contain the queries to the customer table
const database = require("./database");
const express = require("express");

// Allows us to define a mapping from the URI to a function
router = express.Router();

//Test alive
router.get("/api/test", (request, response) => {
  database.db.get(`SELECT firstName FROM users where userId = 1`,
  (errors, results) => {
    if (errors) {
      response.status(402).send("System Error, DB Error");
    } else {
            response.status(201).send("System OK");
    }
  });
});

// Authenticate user 
router.post("/api/auth", (request, response) => {
  database.db.get(`SELECT firstName FROM users where userId = ${request.body.user_id}`,
  (errors, results) => {
    if (errors) {
      response.status(402).send("User not found");
    } else {
      database.db.get(`SELECT firstName, lastName, nricfin, email, mobile, accountId FROM users join account 
        on account.userId = users.userId where users.userId = ${request.body.user_id} and 
        users.password = '${request.body.password}'`,
        (errors, fresults) => {
          if (errors) {
            response.status(401).send("Authentication failed");
          } else {
            response.status(201).send(fresults);
          }
        }
      )
    };
  });
});

// Get account balance. 
router.get("/api/getbal", (request, response) => {
  database.db.get(
    `SELECT accountId, balance FROM account join users on account.userId = users.userId
    where users.userId = ${request.query.user_id} and 
    users.password = '${request.query.password}'`,
    (errors, results) => {
      if (errors) {
        response.status(501).send("System Error, Retry Later");
      } else {
        response.status(201).send(results);
      }
    }
  );
});

//transfer money
router.post("/api/trfbal", (request, response) => {    
  database.db.get(
    `SELECT account.balance FROM account join users on account.userId = users.userId
    where users.userId = ${request.body.userId} and users.password = '${request.body.password}' and
    account.accountId = '${request.body.fromAccount_number}'`,
    (errors, results) => {
      if (errors) {
        response.status(501).send("System Error1, Please Retry Later");
      } else {
        if (results.balance>=`${request.body.amount}`) {
          database.db.run(
            `UPDATE account set balance = balance-${request.body.amount} where accountId = '${request.body.fromAccount_number}'`,
            (errors, f1results) => {
              if (errors) {
                response.status(501).send("System Error2, Please Retry Later");
              } else {
                database.db.run(
                  `UPDATE account set balance = balance+${request.body.amount} where accountId = '${request.body.toAccount_number}'`,
                  (errors, f2results) => {
                    if (errors) {
                      response.status(501).send("System Error3, Please Retry Later");
                    } else {
                      database.db.run(
                        `insert into transactions (accountId, transactionType, amount) values ('${request.body.fromAccount_number}','transfer',${request.body.amount})`,
                        (errors, f3results) => {
                          if (errors) {
                            response.status(501).send("System Error4, Please Retry Later");
                          } else {
                            response.status(201).send("Transaction Successful");
                          }
                        }
                      );
                    }
                  }
                );
              }
            }
          );
        } else {
          console.log(results[0].balance);
          console.log(`${request.body.amount}`);
          response.status(401).send("Transfer Failed. Not enough balance");
        }
      }
    }  
  );
});

//to change password
router.post("/api/chgpwd", (request, response) => {
  database.db.run(
    `UPDATE users set password = '${request.body.newpassword}' where userId = '${request.body.userId}' and password = '${request.body.oldpassword}'`,
    (errors, results) => {
      if (errors) {
        response.status(501).send("System Error, Retry Later");
      } else {
        response.status(201).send("Password changed successfully!");
      }
    }
  );

});

module.exports = {
  router,
};
