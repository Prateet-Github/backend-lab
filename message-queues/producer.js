import { Queue } from "bullmq";

const notiQueue = new Queue("notification");

export const sendNotification = async (data) => {
  const res = await notiQueue.add("send-notification",
    {
      title: data.title,
      message: data.message,
    }
  );
  console.log("Notification added to the queue", res.id);
};

sendNotification({
  title: "Hello World",
  message: "This is a test notification",
});

