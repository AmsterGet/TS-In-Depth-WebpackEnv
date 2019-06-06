showHello('greeting', 'TypeScript');

function showHello(divName: string, name: string) {
  const elt = document.getElementById(divName);
  elt.innerText = `Hello from ${name}`;
}

//---------------------------------------------------------------------------------------

enum Category {
  JavaScript,
  Angular,
  CSS,
  HTML,
  TypeScript,
}

interface Book {
    title: string;
    author: string;
    available: boolean;
    category: Category,
}

// Task 01
function getAllBooks(): Book[] {
    let books: Array<Book> = [
        {
          title: 'Refactoring JavaScript',
          author: 'Evan Burchard',
          available: true,
          category: Category.JavaScript,
        },
        {
          title: 'JavaScript Testing',
          author: 'Liang Yuxian Eugene',
          available: false,
          category: Category.TypeScript,
        },
        {
          title: 'CSS Secrets',
          author: 'Lea Verou',
          available: true,
          category: Category.CSS,

        },
        {
          title: 'Mastering JavaScript Object-Oriented Programming',
          author: 'Andrea Chiarelli',
          available: true,
          category: Category.Angular,
        }
    ];

    return books;
}

function logFirstAvailable(books: Book[] = []): void {
  const numberOfBooks: number = books.length;
  let firstAvailableTitle: string = '';

  for (const book of books) {
    if (book.available) {
        firstAvailableTitle = book.title;
        break;
    }
  }
  console.log(`Total books: ${numberOfBooks}`);
  console.log(`First available book title: ${firstAvailableTitle}`);
}

logFirstAvailable(getAllBooks());
//---------------------------------------------------------------------------------------

// Task 02
function getBookTitlesByCategory(category: Category): string[] {
  const books = getAllBooks();
    const titles: string[] = [];

  for (const book of books) {
    if ((<any>book).category === category) {
      titles.push((<any>book).title);
    }
  }

  return titles;
}

function logBookTitles(titles: Array<string>): void {
    titles.forEach((title) => console.log(title));
}


logBookTitles(getBookTitlesByCategory(Category.JavaScript));

//---------------------------------------------------------------------------------------
