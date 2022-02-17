const BlogForm = ({addBlog, title, handleTitleChange, author, handleAuthorChange, url, handleUrlChange}) => (
  <div>
    <form onSubmit={addBlog}>
      <label>
        Title:
          <input 
          value={title}
          onChange={handleTitleChange}
          />
      </label>
      <br />

      <label>
        Author:
          <input
          value={author}
          onChange={handleAuthorChange}
          />
      </label>
      <br />

      <label>
        Url:
        <input
          value={url}
          onChange={(handleUrlChange)}
        />
      </label>
      <br />
      
      <button type="Submit">Submit</button>
    </form>
  </div>
)

export default BlogForm