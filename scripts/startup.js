// All functions in this file should be called directly after their declaration.

function loadUsername() {
    username = localStorage.getItem('username') ?? '';
    document.getElementById('usernameInput').value = `${username}`;
};
loadUsername();

function loadPreferredGameMode() {
    preferredGameMode = localStorage.getItem('prefGameMode') ?? 0;
    document.getElementById('gameModeSelect').value = preferredGameMode;
};
loadPreferredGameMode();