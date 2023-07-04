import { PrismaClient } from "@prisma/client";
let db = new PrismaClient();

async function seed() {
  await Promise.all(
    getCustomers().map((customer) => {
      return db.customer.create({ data: customer });
    })
  );
}

seed();

function getCustomers() {
  return [
    {
      name: "Muhamad hanif Muhsin",
      email: "mhanifmuhsin@gmail.com",
      phone: "62145636434",
    },
    {
      name: "Muhammad Saefulloh Jamil Al Hamiid",
      email: "hamiid@gmail.com",
      phone: "62145636435",
    },
    {
      name: "Ahmad Fauzi Hidayatulloh",
      email: "ahmadfauzi@gmail.com",
      phone: "62145636436",
    },
  ];
}
