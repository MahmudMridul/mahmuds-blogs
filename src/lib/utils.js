export async function getMarkdownFile(fileName) {
   const res = await fetch(fileName);
   const content = await res.text();
   return content;
}

export function searchBlogs(searchText, list) {
   const text = searchText.toLowerCase();
   const filteredList = list.filter((blog) => {
      const name = blog.name.toLowerCase();
      const category = blog.category.toLowerCase();
      if (name.includes(text) || category.includes(text)) {
         return blog;
      }
      return null;
   });
   return filteredList;
}

export function setPageInfo(title, description, keywords) {
   setPageTitle(title);
   setPageDescription(description);
   setPageKeywords(keywords);
   setPageAuthor();
}

function setPageTitle(title) {
   document.title = title;
}

function setPageDescription(description) {
   let metaDescription = document.querySelector('meta[name="description"]');
   if (metaDescription) {
      metaDescription.content = description;
   } else {
      let newMeta = document.createElement('meta');
      newMeta.name = 'description';
      newMeta.content = description;
      document.head.appendChild(newMeta);
   }
}

function setPageKeywords(keywords) {
   let metaKeywords = document.querySelector('meta[name="keywords"]');
   if (metaKeywords) {
      metaKeywords.content = keywords;
   } else {
      let newMeta = document.createElement('meta');
      newMeta.name = 'keywords';
      newMeta.content = keywords;
      document.head.appendChild(newMeta);
   }
}

function setPageAuthor() {
   const author = "Abdullah Al Mahmud";
   let metaAuthor = document.querySelector('meta[name="author"]');
   if (metaAuthor) {
      metaAuthor.content = author;
   } else {
      let newMeta = document.createElement('meta');
      newMeta.name = 'author';
      newMeta.content = author;
      document.head.appendChild(newMeta);
   }
}