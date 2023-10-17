import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

export async function POST(req, res) {
  BigInt.prototype.toJSON = function () {
    return this.toString();
  };

  // *-------------------------- Crud Operation for User model Starts Here ------------------------------*

  // ***********  For Single entry ***********

  // try {
  //   const prisma = new PrismaClient({
  //     log: ["query", "info", "warn", "error"],
  //   });
  //   let result = await prisma.users.create({
  //     data: {
  //       firstName: "Bodrul",
  //       middleName: "Huda",
  //       lastName: "Attasham",
  //       mobile: "01111111",
  //       email: "b4@email.com",
  //       passwordHash: "hfnch232&&",
  //       admin: 1,
  //     },
  //   });
  //   return NextResponse.json({ status: "Success", result: result });
  // } catch (err) {
  //   return NextResponse.json({ status: "Fail", result: err.toString() });
  // }

  // ***********  For Multiple entry ***********

  // try {
  //   const prisma = new PrismaClient({
  //     log: ["query", "info", "warn", "error"],
  //   });
  //   let result = await prisma.users.createMany({
  //     data: [
  //       {
  //         firstName: "Bodrul",
  //         middleName: "Huda",
  //         lastName: "Attasham",
  //         mobile: "01111112",
  //         email: "b8@email.com",
  //         passwordHash: "hfnch232&&",
  //         admin: 1,
  //       },
  //       {
  //         firstName: "Bodrul",
  //         middleName: "Huda",
  //         lastName: "Attasham",
  //         mobile: "01111112",
  //         email: "b9@email.com",
  //         passwordHash: "hfnch232&&",
  //         admin: 1,
  //       },
  //     ],
  //   });
  //   return NextResponse.json({ status: "Success", result: result });
  // } catch (err) {
  //   return NextResponse.json({ status: "Fail", result: err.toString() });
  // }

  // *********** To get Single Data ***********

  // try {
  //   const prisma = new PrismaClient();
  //   let result = await prisma.users.findUnique({
  //     where: {
  //       email: "b2@email.com",
  //     },
  //   });
  //   return NextResponse.json({ status: "Success", result: result });
  // } catch (err) {
  //   return NextResponse.json({ status: "Fail", result: err.toString() });
  // }

  // *********** To get All Data ***********

  // try {
  //   const prisma = new PrismaClient();
  //   let result = await prisma.users.findMany({});
  //   return NextResponse.json({ status: "Success", result: result });
  // } catch (err) {
  //   return NextResponse.json({ status: "Fail", result: err.toString() });
  // }

  // *********** To Update Single Data ***********

  // try {
  //   const prisma = new PrismaClient();
  //   let result = await prisma.users.update({
  //     where: { email: "b2@email.com" },
  //     data: { mobile: "012222222" },
  //   });
  //   return NextResponse.json({ status: "Success", result: result });
  // } catch (err) {
  //   return NextResponse.json({ status: "Fail", result: err.toString() });
  // }

  // *********** To Update Multiple Data ***********

  // try {
  //   const prisma = new PrismaClient();
  //   let result = await prisma.users.updateMany({
  //     where: {
  //       email: "b3@email.com",
  //     },
  //     data: { firstName: "Lee", middleName: "Jian", lastName: "Chen" },
  //   });

  //   return NextResponse.json({ status: "Success", result: result });
  // } catch (err) {
  //   return NextResponse.json({ status: "Fail", result: err.toString() });
  // }

  // *********** To Delete Single Data ***********

  // try {
  //   const prisma = new PrismaClient();
  //   let result = await prisma.users.delete({
  //     where: { email: "b5@email.com" },
  //   });

  //   return NextResponse.json({ status: "Success", result: result });
  // } catch (err) {
  //   return NextResponse.json({ status: "Fail", result: err.toString() });
  // }

  // *********** To Delete Multiple Data ***********

  // try {
  //   const prisma = new PrismaClient();
  //   let result = await prisma.users.deleteMany({
  //     where: { mobile: "01111112" },
  //   });

  //   return NextResponse.json({ status: "Success", result: result });
  // } catch (err) {
  //   return NextResponse.json({ status: "Fail", result: err.toString() });
  // }

  // *-------------------------- Crud Operation for User model Ends Here ------------------------------*
  //
  //
  //
  // *-------------------------- Crud Operation for Category model Starts Here ------------------------------*

  // // *********** Create Single Data ***********
  // try {
  //   const prisma = new PrismaClient();
  //   let result = await prisma.category.create({
  //     data: {
  //       title: "Laptop",
  //       metaTitle: "Data",
  //       slug: "Unique",
  //       content: "Description",
  //     },
  //   });
  //   return NextResponse.json({ status: "Success", result: result });
  // } catch (err) {
  //   return NextResponse.json({ status: "Fail", result: err.toString() });
  // }

  // //// *********** Create Multiple Data ***********
  // try {
  //   const prisma = new PrismaClient();
  //   let result = await prisma.category.createMany({
  //     data: [
  //       {
  //         title: "Tab",
  //         metaTitle: "Data",
  //         slug: "Unique",
  //         content: "Description",
  //       },
  //       {
  //         title: "Tab",
  //         metaTitle: "Data",
  //         slug: "Unique",
  //         content: "Description",
  //       },
  //     ],
  //   });
  //   return NextResponse.json({ status: "Success", result: result });
  // } catch (err) {
  //   return NextResponse.json({ status: "Fail", result: err.toString() });
  // }

  //// *********** Read Single Data ***********
  // try {
  //   const prisma = new PrismaClient();
  //   let result = await prisma.category.findUnique({
  //     where: {
  //       id: 2,
  //     },
  //   });
  //   return NextResponse.json({ status: "Success", result: result });
  // } catch (err) {
  //   return NextResponse.json({ status: "Fail", result: err.toString() });
  // }

  //// *********** Read Multiple Data ***********
  // try {
  //   const prisma = new PrismaClient();
  //   let result = await prisma.category.findMany({});
  //   return NextResponse.json({ status: "Success", result: result });
  // } catch (err) {
  //   return NextResponse.json({ status: "Fail", result: err.toString() });
  // }

  //// *********** Update Single Data ***********
  // try {
  //   const prisma = new PrismaClient();
  //   let result = await prisma.category.update({
  //     where: { id: 3 },
  //     data: { title: "Updated" },
  //   });
  //   return NextResponse.json({ status: "Success", result: result });
  // } catch (err) {
  //   return NextResponse.json({ status: "Fail", result: err.toString() });
  // }

  //// *********** Update Multiple Data ***********
  // try {
  //   const prisma = new PrismaClient();
  //   let result = await prisma.category.updateMany({
  //     where: { title: "any" },
  //     data: { title: "Other" },
  //   });
  //   return NextResponse.json({ status: "Success", result: result });
  // } catch (err) {
  //   return NextResponse.json({ status: "Fail", result: err.toString() });
  // }

  //// *********** Delete Single Data ***********
  // try {
  //   const prisma = new PrismaClient();
  //   let result = await prisma.category.delete({
  //     where: { id: "3" },
  //   });
  //   return NextResponse.json({ status: "Success", result: result });
  // } catch (err) {
  //   return NextResponse.json({ status: "Fail", result: err.toString() });
  // }

  //// *********** Delete Multiple Data ***********
  // try {
  //   const prisma = new PrismaClient();
  //   let result = await prisma.category.deleteMany({
  //     where: { title: "tab" },
  //   });
  //   return NextResponse.json({ status: "Success", result: result });
  // } catch (err) {
  //   return NextResponse.json({ status: "Fail", result: err.toString() });
  // }

  // *-------------------------- Crud Operation for Category model Ends Here ------------------------------*
  //
  //
  //
  // *-------------------------- Crud Operation for Product model Starts Here ------------------------------*

  // // *********** Create Single Data ***********
  // try {
  //   const prisma = new PrismaClient();
  //   let result = await prisma.products.create({
  //     data: {
  //       firstName: "PS",
  //       metaTitle: "Data",
  //       slug: "Unique",
  //       summary: "Description",
  //       price: 30,
  //       discount: 5,
  //       users: {
  //         connect: {
  //           id: 2,
  //         },
  //       },
  //       category: {
  //         connect: {
  //           id: 2,
  //         },
  //       },
  //     },
  //   });
  //   return NextResponse.json({ status: "Success", result: result });
  // } catch (err) {
  //   return NextResponse.json({ status: "Fail", result: err.toString() });
  // }

  //// *********** Read Single Data ***********
  // try {
  //   const prisma = new PrismaClient();
  //   let result = await prisma.products.findUnique({
  //     where: {
  //       id: 2,
  //     },
  //   });
  //   return NextResponse.json({ status: "Success", result: result });
  // } catch (err) {
  //   return NextResponse.json({ status: "Fail", result: err.toString() });
  // }

  //// *********** Read Multiple Data ***********
  // try {
  //   const prisma = new PrismaClient();
  //   let result = await prisma.products.findMany({});
  //   return NextResponse.json({ status: "Success", result: result });
  // } catch (err) {
  //   return NextResponse.json({ status: "Fail", result: err.toString() });
  // }

  //// *********** Update Single Data ***********
  // try {
  //   const prisma = new PrismaClient();
  //   let result = await prisma.products.update({
  //     where: { id: 3 },
  //     data: { firstName: "Updated" },
  //   });
  //   return NextResponse.json({ status: "Success", result: result });
  // } catch (err) {
  //   return NextResponse.json({ status: "Fail", result: err.toString() });
  // }

  //// *********** Update Multiple Data ***********
  // try {
  //   const prisma = new PrismaClient();
  //   let result = await prisma.products.updateMany({
  //     where: { firstName: "PS" },
  //     data: { firstName: "PlayStation" },
  //   });
  //   return NextResponse.json({ status: "Success", result: result });
  // } catch (err) {
  //   return NextResponse.json({ status: "Fail", result: err.toString() });
  // }

  //// *********** Delete Single Data ***********
  // try {
  //   const prisma = new PrismaClient();
  //   let result = await prisma.products.delete({
  //     where: { id: "3" },
  //   });
  //   return NextResponse.json({ status: "Success", result: result });
  // } catch (err) {
  //   return NextResponse.json({ status: "Fail", result: err.toString() });
  // }

  //// *********** Delete Multiple Data ***********
  // try {
  //   const prisma = new PrismaClient();
  //   let result = await prisma.products.deleteMany({
  //     where: { firstName: "Updated" },
  //   });
  //   return NextResponse.json({ status: "Success", result: result });
  // } catch (err) {
  //   return NextResponse.json({ status: "Fail", result: err.toString() });
  // }

  // *-------------------------- Crud Operation for Product model Ends Here ------------------------------*
  //
  //
  //
  // *-------------------------- Crud Operation for Cart model Starts Here ------------------------------*

  // // *********** Create Single Data ***********
  // try {
  //   const prisma = new PrismaClient();
  //   let result = await prisma.carts.create({
  //     data: {
  //       title: "PS",
  //       sessionId: "Data",
  //       token: "Unique",
  //       status: "true",
  //       firstName: "A",
  //       middleName: "A",
  //       lastName: "A",
  //       mobile: "0183748",
  //       email: "a@email.com",
  //       city: "A",
  //       country: "B",
  //       users: {
  //         connect: {
  //           id: 2,
  //         },
  //       },
  //     },
  //   });
  //   return NextResponse.json({ status: "Success", result: result });
  // } catch (err) {
  //   return NextResponse.json({ status: "Fail", result: err.toString() });
  // }

  //// *********** Read Single Data ***********
  // try {
  //   const prisma = new PrismaClient();
  //   let result = await prisma.carts.findUnique({
  //     where: {
  //       id: 2,
  //     },
  //   });
  //   return NextResponse.json({ status: "Success", result: result });
  // } catch (err) {
  //   return NextResponse.json({ status: "Fail", result: err.toString() });
  // }

  //// *********** Read Multiple Data ***********
  // try {
  //   const prisma = new PrismaClient();
  //   let result = await prisma.carts.findMany({});
  //   return NextResponse.json({ status: "Success", result: result });
  // } catch (err) {
  //   return NextResponse.json({ status: "Fail", result: err.toString() });
  // }

  //// *********** Update Single Data ***********
  // try {
  //   const prisma = new PrismaClient();
  //   let result = await prisma.carts.update({
  //     where: { id: 3 },
  //     data: { firstName: "Updated" },
  //   });
  //   return NextResponse.json({ status: "Success", result: result });
  // } catch (err) {
  //   return NextResponse.json({ status: "Fail", result: err.toString() });
  // }

  //// *********** Update Multiple Data ***********
  // try {
  //   const prisma = new PrismaClient();
  //   let result = await prisma.carts.updateMany({
  //     where: { country: "B" },
  //     data: { country: "A" },
  //   });
  //   return NextResponse.json({ status: "Success", result: result });
  // } catch (err) {
  //   return NextResponse.json({ status: "Fail", result: err.toString() });
  // }

  //// *********** Delete Single Data ***********
  // try {
  //   const prisma = new PrismaClient();
  //   let result = await prisma.carts.delete({
  //     where: { id: "5" },
  //   });
  //   return NextResponse.json({ status: "Success", result: result });
  // } catch (err) {
  //   return NextResponse.json({ status: "Fail", result: err.toString() });
  // }

  //// *********** Delete Multiple Data ***********
  // try {
  //   const prisma = new PrismaClient();
  //   let result = await prisma.carts.deleteMany({
  //     where: { firstName: "Updated" },
  //   });
  //   return NextResponse.json({ status: "Success", result: result });
  // } catch (err) {
  //   return NextResponse.json({ status: "Fail", result: err.toString() });
  // }

  // *-------------------------- Crud Operation for Cart model Ends Here ------------------------------*
  //
  //
  //
  // *-------------------------- Crud Operation for Order model Starts Here ------------------------------*

  // // *********** Create Single Data ***********
  // try {
  //   const prisma = new PrismaClient();
  //   let result = await prisma.order.create({
  //     data: {
  //       title: "XBox",
  //       token: "Unique",
  //       subTotal: 55,
  //       itemDiscount: 5,
  //       tax: 3,
  //       total: 50,
  //       discount: 5,
  //       grandTotal: 45,
  //       firstName: "A",
  //       middleName: "A",
  //       lastName: "A",
  //       mobile: "0183748",
  //       email: "a@email.com",
  //       city: "A",
  //       country: "A",
  //       users: {
  //         connect: {
  //           id: 2,
  //         },
  //       },
  //     },
  //   });
  //   return NextResponse.json({ status: "Success", result: result });
  // } catch (err) {
  //   return NextResponse.json({ status: "Fail", result: err.toString() });
  // }

  //// *********** Read Single Data ***********
  // try {
  //   const prisma = new PrismaClient();
  //   let result = await prisma.order.findUnique({
  //     where: {
  //       id: 2,
  //     },
  //   });
  //   return NextResponse.json({ status: "Success", result: result });
  // } catch (err) {
  //   return NextResponse.json({ status: "Fail", result: err.toString() });
  // }

  //// *********** Read Multiple Data ***********
  // try {
  //   const prisma = new PrismaClient();
  //   let result = await prisma.order.findMany({});
  //   return NextResponse.json({ status: "Success", result: result });
  // } catch (err) {
  //   return NextResponse.json({ status: "Fail", result: err.toString() });
  // }

  //// *********** Update Single Data ***********
  // try {
  //   const prisma = new PrismaClient();
  //   let result = await prisma.order.update({
  //     where: { id: 3 },
  //     data: { firstName: "Updated" },
  //   });
  //   return NextResponse.json({ status: "Success", result: result });
  // } catch (err) {
  //   return NextResponse.json({ status: "Fail", result: err.toString() });
  // }

  //// *********** Update Multiple Data ***********
  // try {
  //   const prisma = new PrismaClient();
  //   let result = await prisma.order.updateMany({
  //     where: { country: "B" },
  //     data: { country: "A" },
  //   });
  //   return NextResponse.json({ status: "Success", result: result });
  // } catch (err) {
  //   return NextResponse.json({ status: "Fail", result: err.toString() });
  // }

  //// *********** Delete Single Data ***********
  // try {
  //   const prisma = new PrismaClient();
  //   let result = await prisma.order.delete({
  //     where: { id: "5" },
  //   });
  //   return NextResponse.json({ status: "Success", result: result });
  // } catch (err) {
  //   return NextResponse.json({ status: "Fail", result: err.toString() });
  // }

  //// *********** Delete Multiple Data ***********
  // try {
  //   const prisma = new PrismaClient();
  //   let result = await prisma.order.deleteMany({
  //     where: { firstName: "Updated" },
  //   });
  //   return NextResponse.json({ status: "Success", result: result });
  // } catch (err) {
  //   return NextResponse.json({ status: "Fail", result: err.toString() });
  // }
  // *-------------------------- Crud Operation for Order model Ends Here ------------------------------*
  //
  //
  //
  // *-------------------------- Crud Operation for Product_meta model Starts Here ------------------------------*

  // // *********** Create Single Data ***********
  // try {
  //   const prisma = new PrismaClient();
  //   let result = await prisma.products_meta.create({
  //     data: {
  //       key: "Encrypted",
  //       content: "B",
  //       products: {
  //         connect: {
  //           id: 2,
  //         },
  //       },
  //     },
  //   });
  //   return NextResponse.json({ status: "Success", result: result });
  // } catch (err) {
  //   return NextResponse.json({ status: "Fail", result: err.toString() });
  // }

  //// *********** Read Single Data ***********
  // try {
  //   const prisma = new PrismaClient();
  //   let result = await prisma.products_meta.findUnique({
  //     where: {
  //       id: 2,
  //     },
  //   });
  //   return NextResponse.json({ status: "Success", result: result });
  // } catch (err) {
  //   return NextResponse.json({ status: "Fail", result: err.toString() });
  // }

  //// *********** Read Multiple Data ***********
  // try {
  //   const prisma = new PrismaClient();
  //   let result = await prisma.products_meta.findMany({});
  //   return NextResponse.json({ status: "Success", result: result });
  // } catch (err) {
  //   return NextResponse.json({ status: "Fail", result: err.toString() });
  // }

  //// *********** Update Single Data ***********
  // try {
  //   const prisma = new PrismaClient();
  //   let result = await prisma.products_meta.update({
  //     where: { id: 3 },
  //     data: { content: "Updated" },
  //   });
  //   return NextResponse.json({ status: "Success", result: result });
  // } catch (err) {
  //   return NextResponse.json({ status: "Fail", result: err.toString() });
  // }

  //// *********** Update Multiple Data ***********
  // try {
  //   const prisma = new PrismaClient();
  //   let result = await prisma.products_meta.updateMany({
  //     where: { key: "Encrypted" },
  //     data: { key: "Unique" },
  //   });
  //   return NextResponse.json({ status: "Success", result: result });
  // } catch (err) {
  //   return NextResponse.json({ status: "Fail", result: err.toString() });
  // }

  //// *********** Delete Single Data ***********
  // try {
  //   const prisma = new PrismaClient();
  //   let result = await prisma.products_meta.delete({
  //     where: { id: "5" },
  //   });
  //   return NextResponse.json({ status: "Success", result: result });
  // } catch (err) {
  //   return NextResponse.json({ status: "Fail", result: err.toString() });
  // }

  //// *********** Delete Multiple Data ***********
  // try {
  //   const prisma = new PrismaClient();
  //   let result = await prisma.products_meta.deleteMany({
  //     where: { content: "Updated" },
  //   });
  //   return NextResponse.json({ status: "Success", result: result });
  // } catch (err) {
  //   return NextResponse.json({ status: "Fail", result: err.toString() });
  // }
  // *-------------------------- Crud Operation for Product_meta model Ends Here ------------------------------*
  //
  //
  //
  // *-------------------------- Crud Operation for Product_review model Starts Here ------------------------------*

  // // *********** Create Single Data ***********
  // try {
  //   const prisma = new PrismaClient();
  //   let result = await prisma.products_review.create({
  //     data: {
  //       title: "B",
  //       rating: "4",
  //       content: "Loream",
  //       products: {
  //         connect: {
  //           id: 2,
  //         },
  //       },
  //     },
  //   });
  //   return NextResponse.json({ status: "Success", result: result });
  // } catch (err) {
  //   return NextResponse.json({ status: "Fail", result: err.toString() });
  // }

  //// *********** Read Single Data ***********
  // try {
  //   const prisma = new PrismaClient();
  //   let result = await prisma.products_review.findUnique({
  //     where: {
  //       id: 2,
  //     },
  //   });
  //   return NextResponse.json({ status: "Success", result: result });
  // } catch (err) {
  //   return NextResponse.json({ status: "Fail", result: err.toString() });
  // }

  //// *********** Read Multiple Data ***********
  // try {
  //   const prisma = new PrismaClient();
  //   let result = await prisma.products_review.findMany({});
  //   return NextResponse.json({ status: "Success", result: result });
  // } catch (err) {
  //   return NextResponse.json({ status: "Fail", result: err.toString() });
  // }

  //// *********** Update Single Data ***********
  // try {
  //   const prisma = new PrismaClient();
  //   let result = await prisma.products_review.update({
  //     where: { id: 3 },
  //     data: { content: "Updated" },
  //   });
  //   return NextResponse.json({ status: "Success", result: result });
  // } catch (err) {
  //   return NextResponse.json({ status: "Fail", result: err.toString() });
  // }

  //// *********** Update Multiple Data ***********
  // try {
  //   const prisma = new PrismaClient();
  //   let result = await prisma.products_review.updateMany({
  //     where: { rating: "4" },
  //     data: { rating: "4.5" },
  //   });
  //   return NextResponse.json({ status: "Success", result: result });
  // } catch (err) {
  //   return NextResponse.json({ status: "Fail", result: err.toString() });
  // }

  //// *********** Delete Single Data ***********
  // try {
  //   const prisma = new PrismaClient();
  //   let result = await prisma.products_review.delete({
  //     where: { id: "5" },
  //   });
  //   return NextResponse.json({ status: "Success", result: result });
  // } catch (err) {
  //   return NextResponse.json({ status: "Fail", result: err.toString() });
  // }

  //// *********** Delete Multiple Data ***********
  // try {
  //   const prisma = new PrismaClient();
  //   let result = await prisma.products_review.deleteMany({
  //     where: { content: "Updated" },
  //   });
  //   return NextResponse.json({ status: "Success", result: result });
  // } catch (err) {
  //   return NextResponse.json({ status: "Fail", result: err.toString() });
  // }

  // *-------------------------- Crud Operation for Product_review model Ends Here ------------------------------*

  // - aggregate, _avg, _count, groupBy, _max, _sum

  //   try {
  //     const prisma = new PrismaClient();
  //     const result = await prisma.order.aggregate({
  //       _count: { id: true },
  //       _avg: { grandTotal: true },
  //       _max: { grandTotal: true },
  //       _sum: { grandTotal: true },
  //     });
  //     return NextResponse.json({ status: "Success", result: result });
  //   } catch (err) {
  //     return NextResponse.json({ status: "Fail", result: err.toString() });
  //   }

  // groupBy

  // try {
  //   const prisma = new PrismaClient();
  //   const result = await prisma.order.groupBy({
  //     by: ["title"],
  //     _sum: { grandTotal: true },
  //     having: { title: "XBox" },
  //   });
  //   return NextResponse.json({ status: "Success", result: result });
  // } catch (err) {
  //   return NextResponse.json({ status: "Fail", result: err.toString() });
  // }

  /// Transactions & Rollback

  // try {
  //   const prisma = new PrismaClient();
  //   const create_Meta = prisma.products_meta.create({
  //     data: {
  //       key: "Encrypted",
  //       content: "B",
  //       products: {
  //         connect: {
  //           id: 2,
  //         },
  //       },
  //     },
  //   });

  //   const delete_comment = prisma.products_review.create({
  //     data: {
  //       title: "B",
  //       rating: "4",
  //       content: "Loream",
  //       products: {
  //         connect: {
  //           id: 2,
  //         },
  //       },
  //     },
  //   });

  //   const result = await prisma.$transaction([create_Meta, delete_comment]);

  //   return NextResponse.json({ status: "Success", result: result });
  // } catch (err) {
  //   return NextResponse.json({ status: "Fail", result: err.toString() });
  // }
}
