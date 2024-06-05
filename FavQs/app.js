const getQuotes = async () => {
  try {
    const headers = new Headers();
    headers.set(
      "Authorization",
      'Token token="09fe3eeea7632d3568917b494edcff3d"'
    );
    let apis = await fetch("https://favqs.com/api/quotes/", {
      headers,
    }).then((data) => console.log(data.json()));
  } catch (error) {}
};

getQuotes();
