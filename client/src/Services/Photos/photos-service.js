const basic_url="https://pixabay.com/api/?key=25540812-faf2b76d586c1787d2dd02736&q=${CATEGORY}";

export const GetAllPhotos = async () => {
  return await fetch(`${basic_url}`)
    .then((res) => res.json())
    .catch((error) => console.log({ error: "the method get isnt work" }));
};

export const PutPhotos = async (photoData) => {
  try {
    return await fetch(`${basic_url}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `bearer ${localStorage.getItem("token")}`,
      },
        body: JSON.stringify(photoData),
    });
  } catch (error) {
    console.log("error in method put");
  }
};
