async function getData() {
  const url =
    "https://datausa.io/api/data?drilldowns=Nation&measures=Population";
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    // const json = await response.json();
    // console.log("Nation         Population       Year");

    // data = json.data;
    // console.log(data);

    // for (let i in data) {
    // data = json.data[i];
    //   console.log(
    //     json.data[i].Nation +
    //       "   " +
    //       json.data[i].Population +
    //       "        " +
    //       json.data[i].Year
    //   );
    // }

    const json = await response.json();
    console.log(
      "ID Nation     Nation       ID Year      Population       Year"
    );

    data = json.data;
    // console.log(data);

    for (let i in data) {
      //   data = json.data[i];
      console.log(
        json.data[i]["ID Nation"] +
          "     " +
          json.data[i].Nation +
          "   " +
          json.data[i]["ID Year"] +
          "        " +
          json.data[i].Population +
          "       " +
          json.data[i].Year
      );
    }

    // console.log(
    //   json.data[0].Nation +
    //     "   " +
    //     json.data[0].Population +
    //     "        " +
    //     json.data[0].Year
    // ); // printing the data of  some of the variables from first row
  } catch (error) {
    console.error(error.message);
  }
}
getData();
