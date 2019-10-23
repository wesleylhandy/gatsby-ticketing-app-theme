import SecureLS from "secure-ls";

const isBrowser = typeof window !== "undefined"

const alphabetSoup = process.env.SECURE_LS_ENCRYPTION_KEY;

const ls = isBrowser ? new SecureLS({ encodingType: 'aes', encryptionSecret: alphabetSoup }) : null;

const keyName = "_unsafe_token"

/**
 * Returns decrypted text or null
 * @returns {Object|null}
 */
export const readToken = () => {
  const { token } = ls.get(keyName);
  if (token) {
    return token;
  } else {
    return null;
  }
}

/**
 * Returns decrypted text or null
 * @param {String} key - either full store or just info
 * @returns {Object|null}
 */
export const readValue = (key) => {
	const { value } = ls.get(key);
	if (value) {
		return value;
	} else {
		return null;
	}
}

/**
 * Encrypts Data for storing in browser memory
 * @param {String} key - either full store or just info
 * @param {Object|String} value;
 */
export function cryptValue(key, value) {
	ls.set(key, { value });
}

export function removeKey(key) {
	ls.remove(key);
}

/**
 * Encrypts Data for storing in browser memory
 * @param {String} token - either full store or just info
 */
export function cryptToken(token) {
  ls.set(keyName, { token });
}

export function removeToken() {
  ls.remove(keyName);
}

export function emptyLS() {
  ls.removeAll();
}