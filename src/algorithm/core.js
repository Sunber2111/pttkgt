const hash = (str) => {
  const lengthChars = str.length;

  let hashNum = 0;

  str.split("").forEach((val, index) => {
    hashNum += val.charCodeAt(0) * Math.pow(2, lengthChars - index - 1);
  });

  return hashNum;
};

const rehash = (a, b, h, m) => {
  let result = 0;
  result = 2 * (h - a * Math.pow(2, m - 1)) + b;
  return result;
};

export const search = (str, pattern) => {
  let data = {
    hashKey: 0,
    hashInput: [],
  };

  let hx = hash(pattern);
  data.hashKey = hx;
  let hy = hash(str.slice(0, pattern.length));

  if (hx === hy) {
    data.hashInput.push({
      name: str.slice(0, pattern.length),
      value: hy,
      isMatch: true,
      viTri:0
    });
  } else {
    data.hashInput.push({
      name: str.slice(0, pattern.length),
      value: hy,
      isMatch: false,
    });
  }

  for (let i = 1; i <= str.length - pattern.length; i++) {
    hy = rehash(
      str[i - 1].charCodeAt(0),
      str[i + pattern.length - 1].charCodeAt(0),
      hy,
      pattern.length
    );

    if (hy === hx) {
      data.hashInput.push({
        name: str.slice(i, i + pattern.length),
        value: hy,
        isMatch: true,
        viTri:i
      });
    } else {
      data.hashInput.push({
        name: str.slice(i, i + pattern.length),
        value: hy,
        isMatch: false,
      });
    }
  }
  return data;
};
