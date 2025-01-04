# Express.js Server Hang on Long Requests

This repository demonstrates a common issue in Express.js applications: server hangs due to long-running requests without proper timeout handling.  The example shows a simple server that simulates a long-running task (5-second delay).  Without proper error handling, this can lead to unresponsive servers and frustrated users.

The `bug.js` file shows the problematic code. The `bugSolution.js` file provides a solution using request timeouts.