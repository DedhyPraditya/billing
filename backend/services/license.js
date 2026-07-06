
function hwid() {
  return '00000000-0000-0000-0000-000000000000';
}
async function status() {
  return {
    valid: true,
    offline: false,
    enforce: false,
    license_server_url: '',
    hwid: hwid(),
    status: 'active',
    pesan: 'License OK',
    expired: null
  };
}
async function validasi() {
  return {
    ok: true,
    data: {
      status: 'active',
      pesan: 'License OK'
    },
    ts: Date.now()
  };
}
function mulaiHeartbeat() {
  // Do nothing
}
async function perpanjang() {
  return { ok: true };
}
async function getConfig() {
  return { key: '', server: '', enforce: false };
}

module.exports = {
  hwid,
  getConfig,
  validasi,
  status,
  perpanjang,
  mulaiHeartbeat,
  GRACE_MS: 0
};
