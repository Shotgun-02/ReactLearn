
async function showNotification() {
    const result = await Notification.requestPermission();
    if (result === 'granted') {
        const noti = new Notification('Hello!', {
            body: 'It’s me.',
            icon: 'icon512.png'
        });
        noti.onclick = () => alert('clicked');
    }
}
showNotification();
