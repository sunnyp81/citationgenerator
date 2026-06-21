// CSE (Council of Science Editors) source-type spoke editorial.
// This generator uses the CSE name-year system. In the text you cite author and
// year in parentheses; in the reference list authors are listed surname first
// with initials and no periods, the year follows the author, and journal titles
// are abbreviated with periods removed.

export default [
  {
    styleId: 'cse',
    sourceId: 'journal-article',
    answer:
      'To cite a journal article in CSE name-year, list the authors surname first with initials, the year, the article title in sentence case, the abbreviated journal name, then the volume, issue, and page range. The text citation gives the author surname and year in parentheses.',
    steps: [
      { name: 'List authors with initials', text: 'Give each author surname first with initials and no periods, the CSE form.' },
      { name: 'Put the year after the authors', text: 'Place the publication year right after the author list, which is the heart of the name-year system.' },
      { name: 'Add the article title', text: 'Give the article title in sentence case with no quotation marks or italics.' },
      { name: 'Abbreviate the journal', text: 'Use the standard abbreviated journal title, with periods removed as CSE prefers.' },
      { name: 'Add volume, issue, pages', text: 'Give the volume, the issue in parentheses, and the page range.' },
      { name: 'Add the DOI', text: 'Include the DOI at the end for articles that have one.' },
    ],
    formatNote:
      'A CSE name-year journal reference runs authors, year, article title, abbreviated journal, volume(issue), pages, and DOI. In the text you cite the author surname and year in parentheses.',
    variations: [
      { q: 'How do I cite a journal article in the CSE name-year system?', a: 'Put the year immediately after the authors in the reference, and cite author and year in parentheses in the text.' },
      { q: 'How do I cite an article with many authors in CSE?', a: 'List the authors up to the CSE cap, then use et al. for the remainder, keeping surname-first order.' },
      { q: 'Does CSE abbreviate journal titles?', a: 'Yes. CSE uses the standard abbreviated journal title with periods removed, for example J Clin Med.' },
      { q: 'Where does the DOI go in a CSE journal citation?', a: 'The DOI goes at the end of the reference as the stable identifier for the article.' },
    ],
    faq: [
      { q: 'Does CSE name-year use author and year in the text?', a: 'Yes. The text citation gives the author surname and the year in parentheses, not a number.' },
      { q: 'Is the article title italicized in CSE?', a: 'No. CSE uses no italics or quotation marks on article titles, just sentence case.' },
    ],
  },
  {
    styleId: 'cse',
    sourceId: 'book',
    answer:
      'To cite a book in CSE name-year, list the authors or editors surname first with initials, the year, the book title in sentence case, the edition, then the place and publisher. A chapter adds the chapter title and the editors of the whole book with the page range.',
    steps: [
      { name: 'List authors or editors', text: 'Give authors surname first with initials and no periods, marking editors with editor or editors.' },
      { name: 'Put the year after the authors', text: 'Place the publication year directly after the author list.' },
      { name: 'Give the book title', text: 'Enter the book title in sentence case with no italics.' },
      { name: 'State the edition', text: 'Add the edition after the title when it is not the first.' },
      { name: 'Give place and publisher', text: 'Name the place of publication and the publisher.' },
      { name: 'Add a chapter if needed', text: 'For a chapter, give the chapter authors and year, the chapter title, then In the editors, book title, place, publisher, and page range.' },
    ],
    formatNote:
      'A CSE name-year book reference runs authors, year, book title, edition, place, publisher. For a chapter the chapter title precedes In and the editors of the whole book, with a page range.',
    variations: [
      { q: 'How do I cite a book chapter in CSE name-year?', a: 'Give the chapter authors and year, the chapter title, then In the editors, the book title, place, publisher, and the chapter page range.' },
      { q: 'How do I cite an edited book in CSE?', a: 'Put the editors in the author position marked editor or editors, then the year, title, place, and publisher.' },
      { q: 'How do I cite an e-book in CSE?', a: 'Cite it as a book, add a medium designator such as Internet, then the URL and the date accessed.' },
      { q: 'Is a book title italicized in CSE?', a: 'No. CSE keeps book titles in sentence case without italics, unlike many other styles.' },
    ],
    faq: [
      { q: 'Does CSE put the year right after the author for books?', a: 'Yes. In the name-year system the year follows the author for every source type, including books.' },
      { q: 'Does CSE need the place of publication for books?', a: 'Yes. CSE gives the place of publication along with the publisher.' },
    ],
  },
  {
    styleId: 'cse',
    sourceId: 'website',
    answer:
      'To cite a website in CSE name-year, give the author or organization, the year, the page title, the site name, a medium designator such as Internet, the date you accessed it, and the URL. CSE marks online sources with a bracketed Internet designator.',
    steps: [
      { name: 'Name the author', text: 'Use a personal author if named, otherwise the owning organization acts as the author.' },
      { name: 'Add the year', text: 'Give the year published or updated right after the author, per the name-year system.' },
      { name: 'Give the page title', text: 'Enter the specific page title in sentence case.' },
      { name: 'Name the site and medium', text: 'Name the site, then add a medium designator such as Internet in brackets to show it is online.' },
      { name: 'Add the accessed date', text: 'Give the date you accessed the page, which CSE includes for web content.' },
      { name: 'Paste the URL', text: 'Finish with the full direct URL to the page.' },
    ],
    formatNote:
      'A CSE name-year website reference runs author or organization, year, page title, site name, the Internet medium designator, accessed date, and URL. The bracketed Internet tag is a CSE marker for online sources.',
    variations: [
      { q: 'How do I cite a website with no author in CSE?', a: 'Use the owning organization as the author, or begin with the page title when none is named, then add the year, accessed date, and URL.' },
      { q: 'How do I cite a website with no date in CSE?', a: 'Use a no-date indicator in the year position and rely on the accessed date and URL to locate the source.' },
      { q: 'What is the Internet designator in a CSE web citation?', a: 'It is a bracketed medium tag, Internet, that CSE adds to show the source is online rather than print.' },
      { q: 'Does CSE need an accessed date for websites?', a: 'Yes. CSE includes the date you accessed the page because web content can change.' },
    ],
    faq: [
      { q: 'Does CSE use a medium designator for websites?', a: 'Yes. CSE adds a bracketed Internet designator to online references to mark the medium.' },
      { q: 'Do I cite the page or the whole site in CSE?', a: 'Cite the specific page you used, with its own title and URL, not the homepage.' },
    ],
  },
  {
    styleId: 'cse',
    sourceId: 'youtube',
    answer:
      'To cite a YouTube video in CSE name-year, treat the channel or uploader as the author, add the year, give the video title, name YouTube with a video medium designator, then the accessed date and URL. A timestamp in the text marks a specific moment.',
    steps: [
      { name: 'Use the uploader as author', text: 'Put the channel name or person who uploaded the video in the author position.' },
      { name: 'Add the year', text: 'Give the year the video was uploaded right after the author.' },
      { name: 'Give the video title', text: 'Enter the video title in sentence case as shown on its watch page.' },
      { name: 'Name the platform and medium', text: 'Name YouTube and add a bracketed medium designator such as video to mark the format.' },
      { name: 'Add the accessed date', text: 'Give the date you watched the video.' },
      { name: 'Add URL and timestamp', text: 'Finish with the watch URL, and note the timestamp in the text for a specific moment.' },
    ],
    formatNote:
      'A CSE name-year video reference runs uploader, year, video title, YouTube with a video medium designator, accessed date, and URL. A timestamp in the text pinpoints the moment within the video.',
    variations: [
      { q: 'Who is the author for a YouTube video in CSE?', a: 'The channel or account that uploaded the video is treated as the author. Use the channel name exactly as it appears.' },
      { q: 'How do I cite a specific moment in a YouTube video in CSE?', a: 'Cite the whole video in the reference and give the timestamp, such as the minute and second, in your sentence.' },
      { q: 'How do I cite a YouTube video with no named author in CSE?', a: 'Use the channel name as the author. If that is missing, begin with the video title and keep the year and accessed date.' },
      { q: 'Does a CSE video citation need a medium designator?', a: 'Yes. CSE adds a bracketed designator such as video to mark the format of the source.' },
    ],
    faq: [
      { q: 'Is YouTube named as the publisher in CSE?', a: 'YouTube is named as the hosting platform, with the uploading channel treated as the author.' },
      { q: 'Do I include the video length in CSE?', a: 'The duration is optional. CSE focuses on uploader, year, title, platform, medium, accessed date, and URL.' },
    ],
  },
  {
    styleId: 'cse',
    sourceId: 'image',
    answer:
      'To cite an image in CSE name-year, name the creator, add the year, give the image title or a description, name the repository or source, and add a medium designator with the URL and accessed date when online. A reproduced image is numbered as a figure and credited.',
    steps: [
      { name: 'Name the creator', text: 'Give the artist, photographer, or illustrator as the author of the image.' },
      { name: 'Add the year', text: 'State the year the image was created or published right after the creator.' },
      { name: 'Give a title or description', text: 'Use the image title, or a short bracketed description for an untitled image.' },
      { name: 'Name the repository', text: 'Identify the archive, museum, or database that holds the image.' },
      { name: 'Add medium, URL, and accessed date', text: 'For an online image, add a medium designator, the URL, and the date you accessed it.' },
      { name: 'Number it as a figure', text: 'When you reproduce the image, present it as a numbered figure and credit the source in the legend.' },
    ],
    formatNote:
      'A CSE name-year image reference runs creator, year, title or description, repository, and the medium designator with URL and accessed date when online. A reproduced image is numbered as a figure and credited in its legend.',
    variations: [
      { q: 'How do I cite an image with no creator in CSE?', a: 'Begin with the title or a bracketed description, add the year, then the repository and URL. The holding institution can act as the source.' },
      { q: 'How do I credit a reproduced figure in CSE?', a: 'Present it as a numbered figure, credit the source in the legend, and add a matching name-year reference. Reuse may need permission.' },
      { q: 'How do I cite a micrograph or scientific image in CSE?', a: 'Cite the source it came from, often a journal article or database, present it as a numbered figure, and credit it in the legend.' },
      { q: 'Do I need an accessed date for an online image in CSE?', a: 'Yes. Online images take a medium designator and an accessed date so the version you used is recorded.' },
    ],
    faq: [
      { q: 'Are images numbered as figures in CSE?', a: 'When reproduced in your paper they are numbered figures credited in the legend, with a matching name-year reference.' },
      { q: 'What if an image has no title in CSE?', a: 'Use a short bracketed description in place of a title so the reference still identifies the image.' },
    ],
  },
  {
    styleId: 'cse',
    sourceId: 'pdf',
    answer:
      'To cite a PDF in CSE name-year, cite the underlying document, usually a report, giving the author or organization, the year, the title, the place and publisher, then a medium designator with the URL and accessed date. CSE cites the content, not the file format.',
    steps: [
      { name: 'Identify the document type', text: 'Decide whether the PDF is a report, government document, or article, and cite it in that form.' },
      { name: 'Name the author or organization', text: 'Use the personal author, or the issuing organization when no individual is named.' },
      { name: 'Add the year', text: 'Give the year of publication right after the author.' },
      { name: 'Give the title and source', text: 'Enter the full document title, then the place and publisher or issuing body.' },
      { name: 'Add medium and URL', text: 'Add a medium designator such as Internet, then the direct URL to the PDF.' },
      { name: 'Record the accessed date', text: 'End with the date you accessed the file.' },
    ],
    formatNote:
      'A CSE name-year reference to a PDF document runs author or organization, year, title, place, publisher, the Internet medium designator, URL, and accessed date. CSE cites by document type, not file format.',
    variations: [
      { q: 'How do I cite a government report PDF in CSE?', a: 'Use the issuing agency as the author, add the year, give the report title and number, then the medium designator, URL, and accessed date.' },
      { q: 'How do I cite a PDF with no author in CSE?', a: 'Use the issuing organization as the author. If none exists, begin with the title and keep the year and accessed date.' },
      { q: 'Do I write PDF in a CSE citation?', a: 'No. CSE cites the report or article and marks the online form with a medium designator and URL, not the word PDF.' },
      { q: 'How do I cite a journal article PDF in CSE?', a: 'Cite it as a journal article with authors, year, title, journal, volume, and pages, since the PDF is a copy of that article.' },
    ],
    faq: [
      { q: 'Does CSE have a separate PDF citation type?', a: 'No. You cite the underlying report or article, and a medium designator with a URL shows it was online.' },
      { q: 'Do PDFs need a page number in CSE?', a: 'Give a specific page only when you quote or reference one part of the document.' },
    ],
  },
  {
    styleId: 'cse',
    sourceId: 'chatgpt',
    answer:
      'To cite ChatGPT in CSE name-year, name the model owner such as OpenAI as the author, add the date, identify the tool and version, note the prompt, and add the tool URL. Because the conversation is not publicly retrievable, the version, date, and prompt carry the citation.',
    steps: [
      { name: 'Name the model owner', text: 'Use the organization that owns the model, such as OpenAI, as the author.' },
      { name: 'Add the date', text: 'Give the exact date the response was generated, in the year position and as a full date, since the same prompt changes answers over time.' },
      { name: 'Identify the tool and version', text: 'Name ChatGPT and the specific model or version you used.' },
      { name: 'Record the prompt', text: 'State the prompt in the text or a note, as it frames the response.' },
      { name: 'Add the tool URL', text: 'Give the URL of the tool, marked as an online source, even though the chat cannot be reopened.' },
      { name: 'Save the transcript', text: 'Keep the full exchange, since the conversation is not publicly accessible.' },
    ],
    formatNote:
      'A CSE name-year reference to ChatGPT names the model owner, the date, the tool and version, and the tool URL, with the prompt described in the text. The output is non-retrievable, so the date and prompt anchor it.',
    variations: [
      { q: 'Who is the author when citing ChatGPT in CSE?', a: 'The organization that developed the model, such as OpenAI, is treated as the author, since no human wrote the response.' },
      { q: 'Why does CSE need the date for a ChatGPT citation?', a: 'The model is updated and the same prompt yields different answers over time, so the date fixes which response you used.' },
      { q: 'Do I include the prompt when citing ChatGPT in CSE?', a: 'Yes. Readers cannot retrieve the conversation, so state the prompt in the text or a note as essential context.' },
      { q: 'Can readers open the ChatGPT chat I cited in CSE?', a: 'No. A private conversation is not publicly retrievable, so CSE relies on the model, version, date, prompt, and your saved transcript.' },
    ],
    faq: [
      { q: 'Is a ChatGPT response retrievable in CSE?', a: 'No. The conversation cannot be reopened by others, so the citation rests on the model, version, date, and prompt you record.' },
      { q: 'Which ChatGPT version do I cite in CSE?', a: 'Name the specific model or version you used, because versions differ in their answers to the same prompt.' },
    ],
  },
];
