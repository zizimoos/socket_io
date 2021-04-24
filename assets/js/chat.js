export function handleMessageNotif(data) {
  const { message, nickname } = data;
  console.log(`happy ${nickname}: ${message}`);
}
