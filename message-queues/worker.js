import { Worker } from "bullmq";

const notiWorker = new Worker(
  "notification",
  async (job) => {
    if (job.name === "send-notification") {
      console.log("Sending notification...");
      console.log("Title:", job.data.title);
      console.log("Message:", job.data.message);
    }
  },
  {
    connection: {
      host: "127.0.0.1",
      port: 6379,
    },
  }
);

notiWorker.on("completed", (job) => {
  console.log(`Job with id ${job.id} has been completed`);
});

notiWorker.on("failed", (job, err) => {
  console.error(
    `Job with id ${job?.id} has failed with error: ${err.message}`
  );
});

console.log("Worker is running and waiting for jobs...");