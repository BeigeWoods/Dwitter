import { body, param, validationResult } from "express-validator";

const validate = (req, res, next) => {
  const errors = validationResult(req);
  if (errors.isEmpty()) {
    return next();
  }
  return res.status(400).json({ message: errors.array()[0].msg });
};

export const textValidation = [
  body("text")
    .trim()
    .isLength({ min: 1 })
    .withMessage("공백 없이 1자 이상 입력해야 합니다."),
  validate,
];

// export const usernameQuery = [
//   param("username")
//     .trim()
//     .isLength({ min: 2 })
//     .withMessage("username은 공백없이 두 글자 이상입니다."),
//   validate,
// ];

// export const getParamId = [
//   param("id").trim().isInt().withMessage("id는 공백없이 숫자여야 합니다."),
//   validate,
// ];
