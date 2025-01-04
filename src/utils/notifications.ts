export async function notifyAdmin(email: string) {
  const response = await fetch('/api/notify-admin', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email,
      adminEmail: 'arunav.choudhary01@gmail.com'
    }),
  });

  if (!response.ok) {
    throw new Error('Failed to send notification');
  }
}