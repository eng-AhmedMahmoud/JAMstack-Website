// Docs on event and context https://www.netlify.com/docs/functions/#the-handler-method
const handler = async (event) => {
  try {
    const subject = process.env.MY_SECRET || 'World'
    return {
      statusCode: 200,
      body: JSON.stringify({ message: `Hello ${subject}` }),
      // // more keys you can return:
      // headers: { "headerName": "headerValue", ... },
      // isBase64Encoded: true,
    }
  } catch (error) {
    return { statusCode: 500, body: error.toString() }
  }
}

module.exports = { handler }
