module.exports = vin => {
  const regex = /^[ABCDEFGHJKLMNPRSTUVWXYZ0-9]{9}[ABCDEFGHJKLMNPRSTVWXY1-9]{1}[ABCDEFGHJKLMNPRSTUVWXYZ0-9]{7}$/i
  return regex.test(vin)
}
