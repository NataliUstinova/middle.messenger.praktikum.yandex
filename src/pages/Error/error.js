import errorPageTpl from "./error.hbs";

const errors = [
  {
    id: 404,
    title: '404',
    message: 'Page not found',
  },
  {
    id: 500,
    title: '500',
    message: 'Internal server error',
  }
]

const errorPage = (id) => {
  return errorPageTpl(errors[id])
}

export { errorPage };
