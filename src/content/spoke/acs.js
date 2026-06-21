// ACS (American Chemical Society) source-type spoke editorial.
// ACS allows a numeric system (superscript or italic numbers in citation order)
// or an author-date system. References list authors surname first with initials,
// article titles are optional in some journals, and journal names are abbreviated
// per CASSI (the Chemical Abstracts Service Source Index).

export default [
  {
    styleId: 'acs',
    sourceId: 'journal-article',
    answer:
      'To cite a journal article in ACS, give the authors surname first with initials, the article title, the CASSI-abbreviated journal name in italics, the year in bold, the volume in italics, and the page range, with the DOI at the end. ACS was designed around the chemistry journal article, so this is its core format.',
    steps: [
      { name: 'List authors with initials', text: 'Give each author surname first with initials, separated by semicolons, the form ACS uses for author lists.' },
      { name: 'Add the article title', text: 'Include the article title in title case where your ACS journal requires it, as some ACS journals omit it.' },
      { name: 'Abbreviate the journal via CASSI', text: 'Italicize the journal name and abbreviate it using CASSI, the Chemical Abstracts Service Source Index.' },
      { name: 'Bold the year, italicize the volume', text: 'Put the publication year in bold and the volume number in italics, an ACS typographic signature.' },
      { name: 'Give the page range', text: 'Add the starting and ending page numbers after the volume.' },
      { name: 'Add the DOI', text: 'End with the DOI, which ACS expects on recent articles as the permanent identifier.' },
    ],
    formatNote:
      'An ACS journal reference runs authors, title, italic abbreviated journal, bold year, italic volume, pages, DOI. In the numeric system the in-text marker is a superscript or italic number; in the author-date system it is an author and year.',
    variations: [
      { q: 'Does ACS require the article title for a journal citation?', a: 'It depends on the journal. Some ACS journals include the article title and others omit it, so follow the target journal style.' },
      { q: 'How do I abbreviate the journal name in ACS?', a: 'Use the CASSI abbreviation, not your own. The generator applies the standard CASSI short form when you enter the full journal name.' },
      { q: 'How do I cite an article with many authors in ACS?', a: 'List all authors, or use et al. after the first author when your journal sets a cap. Names are separated by semicolons.' },
      { q: 'Where does the DOI go in an ACS journal citation?', a: 'The DOI appears at the end of the reference. ACS treats it as the stable link, preferred over a journal URL.' },
    ],
    faq: [
      { q: 'Why is the year bold and the volume italic in ACS?', a: 'It is an ACS typographic convention: the year is set in bold and the volume number in italics to make them quick to scan.' },
      { q: 'Does ACS use superscript numbers?', a: 'In its numeric system, yes. ACS also offers an author-date system, and journals specify which to use.' },
    ],
  },
  {
    styleId: 'acs',
    sourceId: 'book',
    answer:
      'To cite a book in ACS, give the authors or editors surname first with initials, the book title in italics and title case, the edition, the publisher, the place, and the year in bold. For a chapter you add the chapter title and the editors of the whole volume.',
    steps: [
      { name: 'List authors or editors', text: 'Give authors surname first with initials separated by semicolons, marking editors with Ed. or Eds.' },
      { name: 'Italicize the book title', text: 'Put the full book title in italics and title case.' },
      { name: 'State the edition', text: 'Add the edition after the title when it is not the first, for example 2nd ed.' },
      { name: 'Name publisher and place', text: 'Give the publisher and the place of publication, which ACS retains for books.' },
      { name: 'Bold the year', text: 'End with the year of publication in bold, matching the ACS treatment of dates.' },
      { name: 'Add a chapter if needed', text: 'For a chapter, lead with the chapter authors and title, then In the italic book title, editors, publisher, place, year, and page range.' },
    ],
    formatNote:
      'An ACS book reference runs authors, italic title, edition, publisher, place, bold year. For a chapter, the chapter title comes first, then In before the book title and its editors.',
    variations: [
      { q: 'How do I cite a book chapter in ACS?', a: 'Start with the chapter authors and chapter title, then In, the italic book title, the editors, publisher, place, year, and the chapter page range.' },
      { q: 'Does ACS keep the place of publication for books?', a: 'Yes. Unlike its journal format, ACS retains the place of publication alongside the publisher for books.' },
      { q: 'How do I cite an edited book in ACS?', a: 'Put the editors in the author position followed by Eds., then the italic title, edition, publisher, place, and bold year.' },
      { q: 'How do I cite an e-book in ACS?', a: 'Cite it as a book, then add the DOI or URL and an accessed date so the electronic version can be located.' },
    ],
    faq: [
      { q: 'Is the year bold for ACS book citations too?', a: 'Yes. ACS sets the publication year in bold for books as it does for journal articles.' },
      { q: 'Is a book title italicized in ACS?', a: 'Yes. Book titles are italic and in title case, while article titles are plain.' },
    ],
  },
  {
    styleId: 'acs',
    sourceId: 'website',
    answer:
      'To cite a website in ACS, give the author or organization, the page title, the site name, the URL, and the date you accessed it, with a publication or update date if shown. ACS requires the accessed date because web content is not fixed.',
    steps: [
      { name: 'Name the author', text: 'Use a personal author if named, otherwise treat the owning organization as the author.' },
      { name: 'Give the page title', text: 'Enter the specific page title in title case, distinct from the site name.' },
      { name: 'Name the site', text: 'Identify the website or hosting organization.' },
      { name: 'Add any dates', text: 'Include the publication or last-updated date if it is shown on the page.' },
      { name: 'Paste the URL', text: 'Give the full direct URL to the page.' },
      { name: 'Record the accessed date', text: 'End with the accessed date, written in the ACS form, which ACS treats as required for web sources.' },
    ],
    formatNote:
      'An ACS website reference runs author or organization, page title, site name, URL, and accessed date, with any publication date included. The in-text marker follows the numeric or author-date system you are using.',
    variations: [
      { q: 'How do I cite a website with no author in ACS?', a: 'Use the owning organization as the author, or begin with the page title when none is named, then give the URL and accessed date.' },
      { q: 'How do I cite a website with no date in ACS?', a: 'Omit the publication date and rely on the accessed date, which ACS always requires for web pages.' },
      { q: 'Does ACS require an accessed date for websites?', a: 'Yes. ACS marks the accessed date as required for web content because pages can change after you read them.' },
      { q: 'How do I format the accessed date in ACS?', a: 'Give the date you viewed the page using the ACS date form. The generator applies the correct punctuation once you enter it.' },
    ],
    faq: [
      { q: 'Is the accessed date mandatory for websites in ACS?', a: 'Yes. For web pages ACS treats the accessed date as a required element of the reference.' },
      { q: 'Do I cite the page or the whole site in ACS?', a: 'Cite the specific page you used, with its own title and URL, rather than the homepage.' },
    ],
  },
  {
    styleId: 'acs',
    sourceId: 'youtube',
    answer:
      'To cite a YouTube video in ACS, treat the channel or uploader as the author, give the video title, name YouTube as the site, add the posting date, then the URL and the accessed date. Note a timestamp in the text when you cite a specific moment.',
    steps: [
      { name: 'Use the uploader as author', text: 'Put the channel name or person who posted the video in the author position.' },
      { name: 'Give the video title', text: 'Enter the video title as shown on its watch page.' },
      { name: 'Name the platform', text: 'List YouTube as the website hosting the video.' },
      { name: 'Add the posting date', text: 'Give the date the video was published on YouTube.' },
      { name: 'Paste the watch URL', text: 'Use the full youtube.com watch URL.' },
      { name: 'Add accessed date and timestamp', text: 'Close with the accessed date, and cite the timestamp in the text for a specific moment.' },
    ],
    formatNote:
      'An ACS video reference runs uploader, video title, YouTube, posting date, URL, and accessed date. A timestamp in the sentence pinpoints the moment you used within the video.',
    variations: [
      { q: 'Who is the author for a YouTube video in ACS?', a: 'The channel or account that uploaded the video is treated as the author. Use the channel name exactly as shown.' },
      { q: 'How do I cite a specific time in a YouTube video in ACS?', a: 'Cite the whole video in the reference and give the timestamp, such as the minute and second, in your sentence.' },
      { q: 'How do I cite a YouTube video with no clear author in ACS?', a: 'Use the channel name as the author. If it is missing, begin with the video title and keep the accessed date.' },
      { q: 'Is an accessed date needed for a YouTube video in ACS?', a: 'Yes. Like any web source, the video reference takes an accessed date so the version you watched is recorded.' },
    ],
    faq: [
      { q: 'Is YouTube the publisher in an ACS video citation?', a: 'YouTube is named as the hosting site, with the uploading channel treated as the author.' },
      { q: 'Do I include the video runtime in ACS?', a: 'The runtime is optional. ACS focuses on uploader, title, platform, date, URL, and accessed date.' },
    ],
  },
  {
    styleId: 'acs',
    sourceId: 'image',
    answer:
      'To cite an image in ACS, name the creator, give the image title or a description, add the year, name the repository or source, and add the URL with the accessed date when it is online. A reproduced image is usually presented as a numbered figure and credited in the caption.',
    steps: [
      { name: 'Name the creator', text: 'Give the artist, photographer, or designer as the author of the image.' },
      { name: 'Give a title or description', text: 'Use the title if there is one, or a short bracketed description for an untitled image.' },
      { name: 'Add the year', text: 'State the year the image was created or published.' },
      { name: 'Name the repository', text: 'Identify the database, archive, or institution that holds the image.' },
      { name: 'Add URL and accessed date', text: 'For an online image, give the direct URL and the date you accessed it.' },
      { name: 'Credit it in a caption', text: 'When you reproduce the image, present it as a numbered figure and place the source credit in the figure caption.' },
    ],
    formatNote:
      'An ACS image reference runs creator, title or description, year, repository, and URL with accessed date when online. A reproduced image is numbered as a figure and credited in its caption.',
    variations: [
      { q: 'How do I cite an image with no creator in ACS?', a: 'Begin with the title or a bracketed description, then the year, repository, and URL. The holding institution can serve as the source.' },
      { q: 'How do I credit a reproduced figure in ACS?', a: 'Place the source credit in the figure caption and add a matching reference. Reuse of a copyrighted image may also require permission.' },
      { q: 'How do I cite a chemical structure or spectrum image in ACS?', a: 'Cite the source it came from, often a journal article or database, and credit it in the figure caption with a numbered reference.' },
      { q: 'Do I need an accessed date for an online image in ACS?', a: 'Yes. Online images take an accessed date, like any web source, so the version you used is recorded.' },
    ],
    faq: [
      { q: 'Are images numbered as figures in ACS?', a: 'When reproduced in your paper they are numbered figures credited in the caption, with a matching reference when drawn from another source.' },
      { q: 'What if an image has no title in ACS?', a: 'Use a short bracketed description in place of a title so the reference still identifies the image.' },
    ],
  },
  {
    styleId: 'acs',
    sourceId: 'pdf',
    answer:
      'To cite a PDF in ACS, cite the underlying document, usually a report or technical document, giving the author or organization, the title, the publisher, the year, and the URL with the accessed date. The PDF is a delivery format, not a citation type.',
    steps: [
      { name: 'Identify the document type', text: 'Decide whether the PDF is a report, technical bulletin, or article, and cite it in that form.' },
      { name: 'Name the author or organization', text: 'Use the personal author, or the issuing body when no individual is named.' },
      { name: 'Give the title', text: 'Enter the full document title as printed on the PDF.' },
      { name: 'Add publisher and year', text: 'Name the publisher or issuing organization and the year, with the year in bold per ACS.' },
      { name: 'Add the URL', text: 'Give the direct URL to the PDF.' },
      { name: 'Record the accessed date', text: 'Close with the date you accessed the file.' },
    ],
    formatNote:
      'An ACS reference to a PDF document runs author or organization, title, publisher, bold year, URL, and accessed date. ACS cites by the nature of the document, not by the file format.',
    variations: [
      { q: 'How do I cite a technical report PDF in ACS?', a: 'Use the issuing organization as the author, give the title and any report number, then the publisher, year, URL, and accessed date.' },
      { q: 'How do I cite a PDF with no author in ACS?', a: 'Use the issuing organization as the author. If there is none, begin with the title and keep the year and accessed date.' },
      { q: 'Do I write PDF in an ACS citation?', a: 'No. ACS cites the document as a report or article, and the URL signals it is an online file without labeling it PDF.' },
      { q: 'How do I cite a journal article downloaded as a PDF in ACS?', a: 'Cite it as a journal article with authors, journal, year, volume, pages, and DOI, since the PDF is just a copy of that article.' },
    ],
    faq: [
      { q: 'Does ACS have a dedicated PDF citation type?', a: 'No. You cite the underlying report or article, and the URL shows it was downloadable.' },
      { q: 'Do PDFs need a page number in ACS?', a: 'Give a specific page only when you quote or reference one part of the document.' },
    ],
  },
  {
    styleId: 'acs',
    sourceId: 'chatgpt',
    answer:
      'To cite ChatGPT in ACS, name the model owner such as OpenAI as the author, identify the tool and version, give the date the response was generated, note the prompt, and add the tool URL. Because the chat is not publicly retrievable, the date, version, and prompt do the work of the citation.',
    steps: [
      { name: 'Name the model owner', text: 'Use the organization that owns the model, such as OpenAI, as the author.' },
      { name: 'Identify the tool and version', text: 'Name ChatGPT and the specific model or version, since outputs vary between versions.' },
      { name: 'Add the date generated', text: 'Give the exact date the response was produced, because the same prompt yields different answers over time.' },
      { name: 'Record the prompt', text: 'State the prompt you used in the text or a note, as it frames the response.' },
      { name: 'Add the tool URL', text: 'Give the URL of the tool even though the specific conversation cannot be reopened.' },
      { name: 'Save the transcript', text: 'Keep the full exchange, since the chat is not publicly accessible.' },
    ],
    formatNote:
      'An ACS reference to ChatGPT names the model owner, the tool and version, the date generated, and the tool URL, with the prompt described in the text. The output is non-retrievable, so the date and prompt anchor the citation.',
    variations: [
      { q: 'Who is the author when citing ChatGPT in ACS?', a: 'The organization that developed the model, such as OpenAI, is treated as the author, since no human wrote the response.' },
      { q: 'Why is the version needed when citing ChatGPT in ACS?', a: 'Different model versions return different answers to the same prompt, so naming the version pins down what you used.' },
      { q: 'Do I include the prompt when citing ChatGPT in ACS?', a: 'Yes. The prompt is essential because readers cannot retrieve the conversation, so state it in the text or a note.' },
      { q: 'Can others open the ChatGPT chat I cited in ACS?', a: 'No. A private conversation is not publicly retrievable, so ACS relies on the model, version, date, prompt, and your saved transcript.' },
    ],
    faq: [
      { q: 'Is a ChatGPT response retrievable in ACS?', a: 'No. The conversation cannot be reopened by others, so the citation rests on the model, version, date, and prompt you record.' },
      { q: 'Which ChatGPT version do I cite in ACS?', a: 'Name the specific model or version you used, because versions differ in their answers to the same prompt.' },
    ],
  },
];
