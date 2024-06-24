const AddBook = () => {
  const jwt = localStorage.getItem("token");
  let form = document.getElementById("form");
  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(form);

    let response = await fetch("https://backend-9s26.onrender.com/books/", {
      method: "POST",
      headers: {
        Authorization: `${jwt}`,
      },
      body: formData,
    });
    let content = await response.json();
    console.log(content);
  };

  return (
    <form
      className="d-flex flex-column align-items-center justify-content-center m-5 "
      id="form"
    >
      <input type="text" placeholder="Title" id="title" name="title" />
      <input type="text" placeholder="Author" id="author" name="author" />
      <input
        type="text"
        placeholder="Description"
        id="description"
        name="description"
      />
      <input type="text" placeholder="Rate" id="rate" name="rate" />
      <input type="text" placeholder="Price" id="price" name="price" />
      <input type="text" placeholder="Genre" id="genre" name="genre" />
      <input
        type="file"
        placeholder="pdf"
        id="pdf"
        name="pdf_file"
        accept=".pdf"
      />
      <input type="submit" onClick={handleSubmit} value="Submit" />
    </form>
  );
};
export default AddBook;
