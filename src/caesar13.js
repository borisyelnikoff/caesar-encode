import CharEncoder from "./charEncoder.js";

export function caesar13(input) {
  if (!input || typeof input !== "string") {
    throw new Error("Invalid input argument. Non-empty string is expected");
  }

  const shift = 13;
  return [...input].map((char) => encodeChar(char, shift)).join("");
}

function encodeChar(char, shift = 0) {
  if (!char || typeof char !== "string") {
    throw new Error("Invalid input argument. Non-empty character is expected.");
  }

  const charEncoder = new CharEncoder(char);
  return String.fromCharCode(charEncoder.encode(shift));
}

// module.exports = { caesar13 }; CommonJS module export
