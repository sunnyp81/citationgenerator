// IEEE source-type spoke editorial.
// IEEE uses a numbered system: references are numbered in the order they first
// appear and cited in the text with bracketed numbers like [1]. Authors are
// listed with initials first then surname, and the bracketed number also opens
// each entry in the reference list.

export default [
  {
    styleId: 'ieee',
    sourceId: 'journal-article',
    answer:
      'To cite a journal article in IEEE, list the authors as initials then surname, the article title in quotation marks, the abbreviated journal name in italics, then volume, issue, page range, and year, ending with the DOI. IEEE numbers each reference and cites it in the text with a bracketed number.',
    steps: [
      { name: 'List authors initials-first', text: 'Give each author as initials then surname, for example J. A. Smith, which is the IEEE name order.' },
      { name: 'Quote the article title', text: 'Put the article title in quotation marks and in sentence case.' },
      { name: 'Abbreviate and italicize the journal', text: 'Use the standard IEEE abbreviation for the journal name and set it in italics.' },
      { name: 'Add volume, issue, pages', text: 'Give the volume, the issue number, and the page range using the abbreviations vol., no., and pp.' },
      { name: 'Add the year', text: 'Place the year at the end of the citation details.' },
      { name: 'Append the DOI', text: 'Finish with the DOI, which IEEE includes for articles that have one.' },
    ],
    formatNote:
      'An IEEE journal reference opens with a bracketed number, then authors, quoted title, italic abbreviated journal, vol., no., pp., year, and DOI. In the text you cite it as a bracketed number such as [1].',
    variations: [
      { q: 'How do I cite a journal article with many authors in IEEE?', a: 'List up to six authors. With more than six, give the first author followed by et al.' },
      { q: 'How are author names ordered in IEEE?', a: 'IEEE puts initials first then surname, the reverse of styles that lead with the surname.' },
      { q: 'Where does the DOI go in an IEEE journal citation?', a: 'The DOI comes at the end of the reference, after the year, as the stable identifier.' },
      { q: 'Do I use vol. and no. in IEEE?', a: 'Yes. IEEE uses the abbreviations vol. for volume, no. for issue, and pp. for the page range.' },
    ],
    faq: [
      { q: 'Does IEEE use bracketed numbers instead of author-date?', a: 'Yes. IEEE cites with bracketed numbers like [1] keyed to a numbered reference list, not with author and year.' },
      { q: 'Is the article title italicized in IEEE?', a: 'No. The article title goes in quotation marks and the journal name is italicized.' },
    ],
  },
  {
    styleId: 'ieee',
    sourceId: 'book',
    answer:
      'To cite a book in IEEE, list the authors as initials then surname, the book title in italics and title case, the edition, then the place, publisher, and year. A chapter adds the chapter title in quotation marks and the editors of the whole book.',
    steps: [
      { name: 'List authors initials-first', text: 'Give authors as initials then surname, the IEEE order.' },
      { name: 'Italicize the book title', text: 'Put the full book title in italics and title case.' },
      { name: 'State the edition', text: 'Add the edition after the title when it is not the first, for example 2nd ed.' },
      { name: 'Give place and publisher', text: 'Name the place of publication and the publisher, which IEEE retains for books.' },
      { name: 'Add the year', text: 'End with the year of publication.' },
      { name: 'Add a chapter if needed', text: 'For a chapter, quote the chapter title, then in the italic book title, the editors, place, publisher, year, and pages.' },
    ],
    formatNote:
      'An IEEE book reference opens with a bracketed number, then authors, italic title, edition, place, publisher, year. For a chapter the quoted chapter title precedes the italic book title and its editors.',
    variations: [
      { q: 'How do I cite a book chapter in IEEE?', a: 'Give the chapter authors, the chapter title in quotation marks, then in the italic book title, the editors, place, publisher, year, and the chapter pages.' },
      { q: 'Does IEEE keep the place of publication for books?', a: 'Yes. IEEE retains the place of publication along with the publisher and year for books.' },
      { q: 'How do I cite an edited book in IEEE?', a: 'Put the editors in the author position marked Ed. or Eds., then the italic title, edition, place, publisher, and year.' },
      { q: 'How do I cite an e-book in IEEE?', a: 'Cite it as a book and add the access details, such as Available followed by the URL, so the electronic copy can be found.' },
    ],
    faq: [
      { q: 'Is a book title italicized in IEEE?', a: 'Yes. Book titles are italic and in title case, while chapter and article titles use quotation marks.' },
      { q: 'Does IEEE need an edition number?', a: 'Only when the book is not the first edition. Place the edition after the title.' },
    ],
  },
  {
    styleId: 'ieee',
    sourceId: 'website',
    answer:
      'To cite a website in IEEE, give the author or organization, the page title in quotation marks, the site name in italics, the date if shown, then Accessed followed by the access date, and Available followed by the URL. IEEE uses the Accessed and Available labels for online sources.',
    steps: [
      { name: 'Name the author', text: 'Use a personal author if named, otherwise the owning organization acts as the author.' },
      { name: 'Quote the page title', text: 'Put the page title in quotation marks, distinct from the site name.' },
      { name: 'Italicize the site name', text: 'Set the website or hosting organization name in italics.' },
      { name: 'Add the date', text: 'Include the publication or update date if the page shows one.' },
      { name: 'Add the accessed date', text: 'Write Accessed followed by the date you viewed the page.' },
      { name: 'Add the URL with Available', text: 'Finish with Available followed by the full URL, the IEEE convention for online sources.' },
    ],
    formatNote:
      'An IEEE website reference opens with a bracketed number, then author, quoted page title, italic site name, date, Accessed date, and Available URL. The Accessed and Available labels are IEEE signatures for web content.',
    variations: [
      { q: 'How do I cite a website with no author in IEEE?', a: 'Use the owning organization as the author, or begin with the quoted page title, then add the Accessed date and Available URL.' },
      { q: 'How do I cite a website with no date in IEEE?', a: 'Omit the publication date and keep the Accessed date and the Available URL so the source can still be located.' },
      { q: 'What do Accessed and Available mean in an IEEE web citation?', a: 'Accessed introduces the date you viewed the page and Available introduces the URL. IEEE uses both labels for online sources.' },
      { q: 'Do I cite the page or the whole site in IEEE?', a: 'Cite the specific page you used, with its own quoted title and URL, not the homepage.' },
    ],
    faq: [
      { q: 'Does IEEE use the words Accessed and Available for websites?', a: 'Yes. IEEE introduces the access date with Accessed and the URL with Available in online references.' },
      { q: 'Is the site name italicized in IEEE?', a: 'Yes. The site name is italic and the specific page title is in quotation marks.' },
    ],
  },
  {
    styleId: 'ieee',
    sourceId: 'youtube',
    answer:
      'To cite a YouTube video in IEEE, treat the channel or uploader as the author, give the video title in quotation marks, name YouTube as the source, add the upload date, then Accessed and the access date, and Available followed by the URL. A timestamp can mark the exact point you used.',
    steps: [
      { name: 'Use the uploader as author', text: 'Put the channel name or person who uploaded the video in the author position.' },
      { name: 'Quote the video title', text: 'Put the video title in quotation marks as shown on its watch page.' },
      { name: 'Name the platform', text: 'List YouTube as the source hosting the video.' },
      { name: 'Add the upload date', text: 'Give the date the video was published on YouTube.' },
      { name: 'Add the accessed date', text: 'Write Accessed followed by the date you watched the video.' },
      { name: 'Add URL and timestamp', text: 'Finish with Available and the watch URL, and note the timestamp in the text for a specific moment.' },
    ],
    formatNote:
      'An IEEE video reference opens with a bracketed number, then uploader, quoted video title, YouTube, upload date, Accessed date, and Available URL. A timestamp in the text pinpoints the moment within the video.',
    variations: [
      { q: 'Who is the author for a YouTube video in IEEE?', a: 'The channel or account that uploaded the video is treated as the author. Use the channel name exactly as it appears.' },
      { q: 'How do I cite a specific moment in a YouTube video in IEEE?', a: 'Cite the whole video in the reference and give the timestamp, such as the minute and second, in your sentence.' },
      { q: 'How do I cite a YouTube video with no named author in IEEE?', a: 'Use the channel name as the author. If that is missing, begin with the quoted video title and keep the Accessed date.' },
      { q: 'Does an IEEE video citation need an Available URL?', a: 'Yes. IEEE introduces the watch URL with Available, alongside the Accessed date, for online video.' },
    ],
    faq: [
      { q: 'Is YouTube named as the source in IEEE?', a: 'Yes. YouTube is given as the hosting source, with the uploading channel treated as the author.' },
      { q: 'Do I include the video length in IEEE?', a: 'The duration is optional. IEEE focuses on uploader, title, platform, date, Accessed date, and Available URL.' },
    ],
  },
  {
    styleId: 'ieee',
    sourceId: 'image',
    answer:
      'To cite an image in IEEE, name the creator, give the image title in quotation marks or a description, add the year, name the repository or source, and add Accessed and Available with the URL when online. A reproduced image is usually labeled Fig. with a number and credited.',
    steps: [
      { name: 'Name the creator', text: 'Give the artist, photographer, or designer as the author of the image.' },
      { name: 'Give a title or description', text: 'Quote the image title, or supply a short bracketed description for an untitled image.' },
      { name: 'Add the year', text: 'State the year the image was created or published.' },
      { name: 'Name the repository', text: 'Identify the archive, museum, or database holding the image.' },
      { name: 'Add Accessed and Available', text: 'For an online image, write Accessed with the date and Available with the URL.' },
      { name: 'Label it as a figure', text: 'When you reproduce the image, label it Fig. with a number and credit the source in the caption.' },
    ],
    formatNote:
      'An IEEE image reference opens with a bracketed number, then creator, quoted title or description, year, repository, and Accessed date with Available URL when online. A reproduced image is numbered Fig. and credited in its caption.',
    variations: [
      { q: 'How do I cite an image with no creator in IEEE?', a: 'Begin with the quoted title or a bracketed description, then the year, repository, and the Available URL. The holding institution can act as the source.' },
      { q: 'How do I credit a reproduced figure in IEEE?', a: 'Label it Fig. with a number, credit the source in the caption, and add a matching bracketed reference. Reuse may also need permission.' },
      { q: 'How do I cite a diagram or schematic image in IEEE?', a: 'Cite the source it came from, often a paper or datasheet, label it as a numbered figure, and credit it in the caption.' },
      { q: 'Do I need Accessed and Available for an online image in IEEE?', a: 'Yes. Online images take Accessed with the date and Available with the URL, like other web sources in IEEE.' },
    ],
    faq: [
      { q: 'Are images labeled Fig. in IEEE?', a: 'When reproduced in your paper they are numbered figures labeled Fig. and credited in the caption, with a matching reference.' },
      { q: 'What if an image has no title in IEEE?', a: 'Use a short bracketed description in place of a title so the reference still identifies the image.' },
    ],
  },
  {
    styleId: 'ieee',
    sourceId: 'pdf',
    answer:
      'To cite a PDF in IEEE, cite the underlying document, often a technical report or standard, giving the author or organization, the title, any report number, the publisher, the year, then Accessed and Available with the URL. IEEE cites the content, not the file type.',
    steps: [
      { name: 'Identify the document type', text: 'Decide whether the PDF is a technical report, standard, or article, and cite it in that form.' },
      { name: 'Name the author or organization', text: 'Use the personal author, or the issuing body when no individual is named.' },
      { name: 'Give the title and number', text: 'Enter the full document title and any report or standard number.' },
      { name: 'Add publisher and year', text: 'Name the publisher or issuing organization and the year.' },
      { name: 'Add the URL with Available', text: 'Write Available followed by the direct URL to the PDF.' },
      { name: 'Add the accessed date', text: 'Write Accessed followed by the date you accessed the file.' },
    ],
    formatNote:
      'An IEEE reference to a PDF document opens with a bracketed number, then author or organization, title, report number, publisher, year, Accessed date, and Available URL. IEEE cites by document type, not file format.',
    variations: [
      { q: 'How do I cite a technical report PDF in IEEE?', a: 'Use the issuing organization as the author, give the title and report number, then the year, Accessed date, and Available URL.' },
      { q: 'How do I cite a standard distributed as a PDF in IEEE?', a: 'Cite it as a standard with the issuing body, the standard title and number, and the year, then add Available with the URL.' },
      { q: 'How do I cite a PDF with no author in IEEE?', a: 'Use the issuing organization as the author. If none exists, begin with the title and keep the year and Accessed date.' },
      { q: 'Do I write PDF in an IEEE citation?', a: 'No. IEEE cites the report or article, and the Available URL signals it is an online file without labeling it PDF.' },
    ],
    faq: [
      { q: 'Does IEEE have a separate PDF citation type?', a: 'No. You cite the underlying report, standard, or article, and Available with the URL shows it was downloadable.' },
      { q: 'Do PDFs need a page number in IEEE?', a: 'Give a specific page only when you quote or reference one part of the document.' },
    ],
  },
  {
    styleId: 'ieee',
    sourceId: 'chatgpt',
    answer:
      'To cite ChatGPT in IEEE, name the model owner such as OpenAI as the author, identify the tool and version, give the date the response was generated, note the prompt, and add the tool URL with Available. Because the conversation is not publicly retrievable, the version, date, and prompt carry the citation.',
    steps: [
      { name: 'Name the model owner', text: 'Use the organization that owns the model, such as OpenAI, as the author.' },
      { name: 'Identify the tool and version', text: 'Name ChatGPT and the specific model or version, since outputs vary between versions.' },
      { name: 'Add the date generated', text: 'Give the exact date the response was produced, because the same prompt changes answers over time.' },
      { name: 'Record the prompt', text: 'State the prompt in the text or a note, as it frames the response.' },
      { name: 'Add the tool URL', text: 'Write Available followed by the tool URL even though the specific chat cannot be reopened.' },
      { name: 'Save the transcript', text: 'Keep the full exchange, since the conversation is not publicly accessible.' },
    ],
    formatNote:
      'An IEEE reference to ChatGPT opens with a bracketed number, then the model owner, the tool and version, the date generated, and Available with the tool URL, with the prompt described in the text. The output is non-retrievable, so the date and prompt anchor it.',
    variations: [
      { q: 'Who is the author when citing ChatGPT in IEEE?', a: 'The organization that developed the model, such as OpenAI, is treated as the author, since no human wrote the response.' },
      { q: 'Why does IEEE need the model version for ChatGPT?', a: 'Different versions return different answers to the same prompt, so naming the version pins down exactly what you used.' },
      { q: 'Do I include the prompt when citing ChatGPT in IEEE?', a: 'Yes. Readers cannot retrieve the conversation, so state the prompt in the text or a note as essential context.' },
      { q: 'Can readers open the ChatGPT chat I cited in IEEE?', a: 'No. A private conversation is not publicly retrievable, so IEEE relies on the model, version, date, prompt, and your saved transcript.' },
    ],
    faq: [
      { q: 'Is a ChatGPT response retrievable in IEEE?', a: 'No. The conversation cannot be reopened by others, so the citation rests on the model, version, date, and prompt you record.' },
      { q: 'Which ChatGPT version do I cite in IEEE?', a: 'Name the specific model or version you used, because versions differ in their answers to the same prompt.' },
    ],
  },
];
