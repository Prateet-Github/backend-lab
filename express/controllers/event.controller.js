export const streamEvents = async (req, res) => {

  try {
    res.setHeader("Content-Type", "text/event-stream");
    res.setHeader("Cache-Control", "no-cache");
    res.setHeader("Connection", "keep-alive");

    const sendEvent = (data) => {
      res.write(`data: ${JSON.stringify(data)}\n\n`);
    };

    // Simulate sending events every 5 seconds
    const interval = setInterval(() => {
      const eventData = { message: "Hello from the server!", timestamp: new Date() };
      sendEvent(eventData);
    }, 5000);

    // Clean up when the client disconnects
    req.on("close", () => {
      clearInterval(interval);
      res.end();
    });


  } catch (error) {
    console.error("Error streaming events:", error);
    res.status(500).json({ message: "Server error while streaming events" });
  }
};