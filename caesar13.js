class CharEncoder {
  constructor(char) {
    if (!char || typeof char !== "string") {
      throw new Error(
        "Invalid input argument. Non-empty character is expected."
      );
    }

    //Value property
    let value = char.charCodeAt(0);
    Object.defineProperty(this, "value", {
      get() {
        return value;
      },
      set(newValue) {
        if (newValue && typeof newValue === "number") {
          value = newValue;
        }
      },
    });

    //Range property
    const lowerCaseRange = { min: 97, max: 122 };
    const upperCaseRange = { min: 65, max: 90 };
    let range = null;
    if (this.isInRange(lowerCaseRange)) {
      range = lowerCaseRange;
    } else if (this.isInRange(upperCaseRange)) {
      range = upperCaseRange;
    }
    Object.defineProperty(this, "range", {
      get() {
        return range;
      },
    });
  }

  //methods
  isInRange(range) {
    if (range && range.min && range.max) {
      return this.value >= range.min && this.value <= range.max;
    }
    return false;
  }

  encode(shift) {
    if (!this.range) return this.value;

    const rangeWidth = this.range.max - this.range.min + 1;
    return (
      ((this.value + shift - this.range.min) % rangeWidth) + this.range.min
    );
  }
}

function encodeChar(char, shift = 0) {
  if (!char || typeof char !== "string") {
    throw new Error("Invalid input argument. Non-empty character is expected.");
  }

  const charEncoder = new CharEncoder(char);
  return String.fromCharCode(charEncoder.encode(shift));
}

function caesar13(input) {
  if (!input || typeof input !== "string") {
    throw new Error("Invalid input argument. Non-empty string is expected");
  }

  const shift = 13;
  return [...input].map((char) => encodeChar(char, shift)).join("");
}

export { caesar13 };
// module.exports = { caesar13 }; CommonJS module export
