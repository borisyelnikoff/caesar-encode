const _value = new WeakMap();
const _range = new WeakMap();

export default class CharEncoder {
  constructor(char) {
    if (!char || typeof char !== "string") {
      throw new Error(
        "Invalid input argument. Non-empty character is expected."
      );
    }

    _value.set(this, char.charCodeAt(0));
    _range.set(this, pickRange(char));
  }

  // Methods
  get value() {
    return _value.get(this);
  }

  get range() {
    return _range.get(this);
  }

  encode(shift) {
    if (!this.range) return this.value;

    const rangeWidth = this.range.max - this.range.min + 1;
    return (
      ((this.value + shift - this.range.min) % rangeWidth) + this.range.min
    );
  }
}

function pickRange(char) {
  const lowerCaseRange = { min: 97, max: 122 };
  const upperCaseRange = { min: 65, max: 90 };

  let range = null;
  if (/^[a-z]/.test(char)) {
    range = lowerCaseRange;
  } else if (/^[A-Z]/.test(char)) {
    range = upperCaseRange;
  }

  return range;
}
