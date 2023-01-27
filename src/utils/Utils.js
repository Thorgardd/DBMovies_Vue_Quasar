export const JsonParser = (value) => {
  return JSON.parse(JSON.stringify(value));
}

export const RedirectIfNotAuth = (boolValue, router) => {
  if (!boolValue)
    return router.push("/")
}
