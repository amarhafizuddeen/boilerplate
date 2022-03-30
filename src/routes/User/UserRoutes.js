const express = require("express");
const router = express.Router();
const UserControllers = require("./UserControllers");

/**
 * @swagger
 *  /users/signin:
 *    post:
 *      summary: User signin
 *      tags: [users]
 *      requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/User'
 *            example:
 *              email: customer@onecompanycloser.com
 *              password: password
 *              rememberMe: true
 *      responses:
 *        "200":
 *          description: A JWT token and user object
 *          content:
 *            application/json:
 *              example:
 *                token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9
 *                user:
 *                  id: 4ce89c00-bf90-430e-97c9-dbb8f8664de9
 *                  firstName: John
 *                  lastName: Smith
 *                  email: johnsmith@email.com
 *                  phoneNumber: 0112345678
 *                  type: customer
 *                  updatedAt: 2020-11-12T06:37:31.864Z
 *                  createdAt: 2020-11-12T06:37:31.701Z
 */
router.post("/signin", (req, res) => UserControllers.signIn(req, res, sequelize));

/**
 * @swagger
 *  /users/signup:
 *    post:
 *      summary: User registration
 *      tags: [users]
 *      requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/User'
 *            example:
 *              firstName: John
 *              lastName: Smith
 *              email: johnsmith@email.com
 *              password: supersafepassword
 *              phoneNumber: 0112345678
 *              type: customer
 *              images: []
 *      responses:
 *        "201":
 *          description: A user schema
 *          content:
 *            application/json:
 *              example:
 *                token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9
 *                user:
 *                  id: 4ce89c00-bf90-430e-97c9-dbb8f8664de9
 *                  firstName: John
 *                  lastName: Smith
 *                  email: johnsmith@email.com
 *                  phoneNumber: 0112345678
 *                  type: customer
 *                  updatedAt: 2020-11-12T06:37:31.864Z
 *                  createdAt: 2020-11-12T06:37:31.701Z
 */
router.post("/signup", (req, res) => UserControllers.signUp(req, res, sequelize));
