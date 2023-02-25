function generateGuestNumber(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
};

function setupUserInfo() {
    let username = document.getElementById('usernameInput').value;
    if (username == '') {
        username = ('Guest-' + generateGuestNumber(100, 999))
    }
    localStorage.setItem('username', username);
    let preferredGameMode = document.getElementById('gameModeSelect').value;
    if (preferredGameMode == 1) {
        alert('Error: This feature is not currently available.')
    }
    localStorage.setItem('prefGameMode', preferredGameMode);
};