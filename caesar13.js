function encodeChar(char, shift = 0) {
  if (!char || typeof char !== "string") {
    throw new Error("Invalid input argument. Non-empty character is expected.");
  }

  const lowerCaseRange = { min: 97, max: 122 };
  const upperCaseRange = { min: 65, max: 90 };
  const encodedChar = {
    value: char.charCodeAt(0),
    isInRange(range) {
      if (range && range.min && range.max) {
        return this.value >= range.min && this.value <= range.max;
      }
      return false;
    },
    encodeValue(shift) {
      if (!this.range) return this.value;

      const rangeWidth = this.range.max - this.range.min;
      return (
        ((this.value + shift - this.range.min) % rangeWidth) + this.range.min
      );
    },
  };
  encodedChar.range = encodedChar.isInRange(lowerCaseRange)
    ? lowerCaseRange
    : encodedChar.isInRange(upperCaseRange)
    ? upperCaseRange
    : null;

  return String.fromCharCode(encodedChar.encodeValue(shift));
}