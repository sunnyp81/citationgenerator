// AMA (American Medical Association) source-type spoke editorial.
// AMA uses a numbered citation system: references are numbered in the order they
// are cited and appear as superscript numerals in the text. Authors are listed
// surname first with initials and no periods between them.

export default [
  {
    styleId: 'ama',
    sourceId: 'journal-article',
    answer:
      'To cite a journal article in AMA, list the authors surname first with initials, the article title in sentence case, the journal name abbreviated per the NLM Catalog, then year, volume, issue, and page range, closing with the DOI. AMA was built for medical journals, so the article is the format it handles most precisely.',
    steps: [
      { name: 'List authors NLM-style', text: 'Give each author as surname then initials with no periods, and separate names with commas, listing up to six before using et al.' },
      { name: 'Title in sentence case', text: 'Capitalize only the first word and proper nouns in the article title, and do not italicize it.' },
      { name: 'Abbreviate the journal', text: 'Use the official NLM abbreviation for the journal name and italicize it, for example JAMA or N Engl J Med.' },
      { name: 'Add year, volume, issue', text: 'Follow the journal with the year, then the volume, then the issue in parentheses.' },
      { name: 'Give the page range', text: 'Add the inclusive page numbers after a colon, using condensed form such as 45-52.' },
      { name: 'Close with the DOI', text: 'End with the DOI as a full doi.org link, since AMA treats it as the most stable identifier for an article.' },
    ],
    formatNote:
      'AMA numbers references in citation order and renders the in-text marker as a superscript numeral. The reference itself runs author, article title, journal, year, volume(issue), pages, DOI.',
    variations: [
      { q: 'How do I cite a journal article with more than six authors in AMA?', a: 'List the first three authors followed by et al. AMA shortens any author list longer than six down to the first three names.' },
      { q: 'How do I cite a journal article DOI in AMA?', a: 'Place the DOI at the end of the reference as a full doi.org URL. AMA prefers the DOI over a plain journal URL because it is permanent.' },
      { q: 'How do I cite an online-ahead-of-print article in AMA?', a: 'Add a note such as published online ahead of print with the posting date, then the DOI, since no volume or issue exists yet.' },
      { q: 'How do I abbreviate the journal name in AMA?', a: 'Use the abbreviation listed in the NLM Catalog, not your own shortening. The generator applies the standard abbreviation when you enter the full journal name.' },
    ],
    faq: [
      { q: 'Does AMA use superscript numbers for journal articles?', a: 'Yes. The in-text citation is a superscript numeral keyed to the numbered reference list, not an author-date parenthetical.' },
      { q: 'Is the article title italicized in AMA?', a: 'No. In AMA the journal name is italicized and the article title is in plain sentence case.' },
    ],
  },
  {
    styleId: 'ama',
    sourceId: 'book',
    answer:
      'To cite a book in AMA, list the authors or editors surname first with initials, the book title in title case and italicized, the edition if not the first, then the publisher and year of publication. For a chapter you add the chapter title and the editors of the whole book.',
    steps: [
      { name: 'List authors or editors', text: 'Give authors surname first with initials, and mark editors with eds after the names when the book is edited.' },
      { name: 'Italicize the title', text: 'Put the full book title in italics and in title case, unlike the sentence case used for article titles.' },
      { name: 'State the edition', text: 'Add the edition after the title when it is not the first, for example 3rd ed.' },
      { name: 'Name the publisher', text: 'Give the current publisher name. AMA no longer requires the city of publication.' },
      { name: 'Add the year', text: 'End with the year of publication of the edition you used.' },
      { name: 'Add a chapter if needed', text: 'For a single chapter, lead with the chapter authors and title, then In: the editors and book title, then publisher, year, and page range.' },
    ],
    formatNote:
      'AMA renders a book reference as author, italicized title, edition, publisher, year, and the in-text marker is the superscript reference number. Page numbers appear only when you cite a specific chapter or passage.',
    variations: [
      { q: 'How do I cite a book chapter in AMA?', a: 'Start with the chapter authors and chapter title, then In: the book editors, the italicized book title, edition, publisher, year, and the chapter page range.' },
      { q: 'How do I cite an edited book in AMA?', a: 'Use the editors in the author position followed by eds, then the italicized title, publisher, and year.' },
      { q: 'How do I cite an e-book in AMA?', a: 'Cite it like a print book, then add the URL or DOI and the accessed date at the end so the online version is retrievable.' },
      { q: 'Do I include the city of publication in AMA?', a: 'No. Current AMA style drops the place of publication and gives only the publisher name and year.' },
    ],
    faq: [
      { q: 'Is a book title italicized in AMA?', a: 'Yes. Book titles are italicized and in title case, while chapter and article titles stay in plain sentence case.' },
      { q: 'Does AMA need an edition number?', a: 'Only when the book is not the first edition. Give the edition right after the title.' },
    ],
  },
  {
    styleId: 'ama',
    sourceId: 'website',
    answer:
      'To cite a website in AMA, give the author or organization, the page title, the site name, the date published or last updated, the URL, and the date you accessed it. Because web pages change, AMA leans on the accessed date to fix what you read.',
    steps: [
      { name: 'Name the author', text: 'Use a personal author if one is named, otherwise the organization that owns the page acts as the author.' },
      { name: 'Give the page title', text: 'Enter the specific page title in sentence case, separate from the overall site name.' },
      { name: 'Add the site name', text: 'Name the website or publishing organization that hosts the page.' },
      { name: 'Add publication and update dates', text: 'Give the date published or last updated if shown, since AMA distinguishes these from the access date.' },
      { name: 'Paste the URL', text: 'Add the full direct URL to the page, not the homepage.' },
      { name: 'Record the accessed date', text: 'End with Accessed and the date you viewed the page, which AMA treats as essential for web content.' },
    ],
    formatNote:
      'An AMA website reference runs author, page title, site name, date published or updated, URL, and the accessed date. The in-text marker remains a superscript reference number.',
    variations: [
      { q: 'How do I cite a website with no author in AMA?', a: 'Start with the page title, then give the site name, date, URL, and accessed date. Often the publishing organization can stand in as the author.' },
      { q: 'How do I cite a website with no date in AMA?', a: 'Omit the publication date and rely on the Accessed date, which AMA always requires for web pages.' },
      { q: 'Why does AMA require an access date for websites?', a: 'Because web pages are edited or removed without notice, the access date records the version you actually used.' },
      { q: 'How do I cite a whole website versus one page in AMA?', a: 'Cite the specific page you used with its own title and URL. AMA does not want a reference to a homepage when you read a single page.' },
    ],
    faq: [
      { q: 'Does AMA need both a published date and an accessed date for a website?', a: 'Give the published or updated date if it is shown, and always add the accessed date. The two serve different purposes.' },
      { q: 'Should the URL be a live link in AMA?', a: 'Give the full working URL to the exact page. AMA does not require it to be hyperlinked in a printed reference list.' },
    ],
  },
  {
    styleId: 'ama',
    sourceId: 'youtube',
    answer:
      'To cite a YouTube video in AMA, treat the channel or uploader as the author, give the video title, name YouTube as the site, add the date the video was published, then the URL and the accessed date. A timestamp can pinpoint the exact moment you used.',
    steps: [
      { name: 'Use the uploader as author', text: 'Put the channel name or person who uploaded the video in the author position.' },
      { name: 'Give the video title', text: 'Enter the video title as shown on its watch page, in sentence case.' },
      { name: 'Name the platform', text: 'List YouTube as the publishing site or platform that hosts the video.' },
      { name: 'Add the upload date', text: 'Give the date the video was published on YouTube, which AMA uses as the date for the source.' },
      { name: 'Paste the watch URL', text: 'Use the full youtube.com watch URL so readers reach the exact video.' },
      { name: 'Add accessed date and timestamp', text: 'End with the accessed date, and note the relevant timestamp in the text when you quote a specific moment.' },
    ],
    formatNote:
      'An AMA video reference runs uploader, video title, YouTube, published date, URL, and accessed date, with the superscript number as the in-text marker. A timestamp identifies the exact point you are citing.',
    variations: [
      { q: 'How do I cite a specific moment in a YouTube video in AMA?', a: 'Cite the whole video in the reference list and indicate the timestamp, such as the minute and second, in your sentence so readers can find the point.' },
      { q: 'Who is the author when citing a YouTube video in AMA?', a: 'The channel or account that uploaded the video acts as the author. Use the channel name exactly as it appears.' },
      { q: 'How do I cite a YouTube video with no upload author shown in AMA?', a: 'Use the channel name as the author. If even that is missing, begin with the video title and keep the access date.' },
      { q: 'Do I include the video length in an AMA citation?', a: 'The duration is optional. AMA focuses on the uploader, title, platform, date, URL, and accessed date.' },
    ],
    faq: [
      { q: 'Is YouTube named as the publisher in AMA?', a: 'Yes. YouTube is given as the site or platform hosting the video, with the channel treated as the author.' },
      { q: 'Does AMA want the upload date or the date I watched the video?', a: 'Give both. The upload date is the source date and the accessed date records when you viewed it.' },
    ],
  },
  {
    styleId: 'ama',
    sourceId: 'image',
    answer:
      'To cite an image in AMA, name the creator, give the image title or a description, add the year it was made, name the repository or source that holds it, and add the URL and accessed date if it is online. In a manuscript an image is usually labeled as a numbered figure.',
    steps: [
      { name: 'Name the creator', text: 'Give the artist, photographer, or illustrator as the author of the image.' },
      { name: 'Give a title or description', text: 'Use the image title if it has one, or a short bracketed description when it is untitled.' },
      { name: 'Add the year', text: 'State the year the image was created or published.' },
      { name: 'Name the repository', text: 'Identify the museum, archive, or database holding the image as the source.' },
      { name: 'Add URL and accessed date', text: 'For an online image, give the direct URL and the date you accessed it.' },
      { name: 'Label it as a figure', text: 'When you reproduce the image, present it as a numbered figure and cite the source in the figure legend.' },
    ],
    formatNote:
      'An AMA image reference runs creator, title or description, year, repository, and URL with accessed date when online. A reproduced image is numbered as a figure and credited in its legend.',
    variations: [
      { q: 'How do I cite an image with no creator in AMA?', a: 'Begin with the image title or a bracketed description, then the year, repository, and URL. The holding institution can stand in as the source.' },
      { q: 'How do I cite a figure reproduced from another source in AMA?', a: 'Place the credit in the figure legend, naming the original source, and add a matching numbered reference. Reuse may also need permission.' },
      { q: 'How do I cite an untitled photograph in AMA?', a: 'Supply a brief description in square brackets in place of a title, then continue with the year, repository, and URL.' },
      { q: 'Do I need an accessed date for an online image in AMA?', a: 'Yes. Like any web source, an online image takes the accessed date so the version you used is recorded.' },
    ],
    faq: [
      { q: 'Are images cited as figures in AMA?', a: 'When reproduced in your paper they are numbered figures credited in the legend, and they also get a numbered reference if drawn from an outside source.' },
      { q: 'What if the image has no title in AMA?', a: 'Replace the title with a short bracketed description of the image so the reference still identifies it.' },
    ],
  },
  {
    styleId: 'ama',
    sourceId: 'pdf',
    answer:
      'To cite a PDF in AMA, treat it by what it actually is, usually a report or document, giving the author or issuing organization, the title, the publisher, the year, then the URL and accessed date. The PDF format itself is not the citation type; the content is.',
    steps: [
      { name: 'Identify the source type', text: 'Decide whether the PDF is a report, government document, or article, and cite it in that form rather than as a generic file.' },
      { name: 'Name the author or organization', text: 'Use the personal author, or the issuing agency or organization when no individual is named.' },
      { name: 'Give the document title', text: 'Enter the full document title as printed on the PDF.' },
      { name: 'Add publisher and year', text: 'Name the publisher or issuing body and the year of publication.' },
      { name: 'Add the URL', text: 'Give the direct URL to the PDF so readers can download the same file.' },
      { name: 'Record the accessed date', text: 'End with the date you accessed the file, since online documents can be revised or moved.' },
    ],
    formatNote:
      'An AMA reference to a PDF report runs author or organization, title, publisher, year, URL, and accessed date, with the superscript number in the text. AMA cites by the nature of the document, not by its file type.',
    variations: [
      { q: 'How do I cite a government report PDF in AMA?', a: 'Use the issuing agency as the author, give the report title and any report number, then the publisher, year, URL, and accessed date.' },
      { q: 'How do I cite a PDF with no author in AMA?', a: 'Use the issuing organization as the author. If none exists, begin with the title and keep the year and accessed date.' },
      { q: 'Do I write the word PDF in an AMA citation?', a: 'No. AMA cites the document as a report or article. The URL signals that it is an online file without labeling it PDF.' },
      { q: 'How do I cite a PDF of a journal article in AMA?', a: 'Cite it as a journal article with author, title, journal, year, volume, issue, and pages, since the PDF is just a copy of that article.' },
    ],
    faq: [
      { q: 'Does AMA have a separate PDF citation type?', a: 'No. You cite the underlying work, most often a report or article, and the URL shows it was a downloadable file.' },
      { q: 'Do I need a page number for a PDF in AMA?', a: 'Give a specific page only when you quote or reference one part. Otherwise the document title and source are enough.' },
    ],
  },
  {
    styleId: 'ama',
    sourceId: 'chatgpt',
    answer:
      'To cite ChatGPT in AMA, name the model owner such as OpenAI as the author, identify the tool and version, give the date the response was generated, note the prompt, and add the tool URL. Because the conversation is not publicly retrievable, AMA expects you to make the prompt and date clear.',
    steps: [
      { name: 'Name the model owner', text: 'Use the organization that owns the model, such as OpenAI, in the author position.' },
      { name: 'Identify the tool and version', text: 'Name the tool, ChatGPT, and the specific version or model where you can, since outputs differ between versions.' },
      { name: 'Add the date generated', text: 'Give the exact date the response was produced, as the same prompt yields different answers over time.' },
      { name: 'Record the prompt', text: 'State the prompt you entered, in the text or a note, because it is needed to interpret the response.' },
      { name: 'Add the tool URL', text: 'Give the URL of the tool, for example the ChatGPT site, even though the specific chat cannot be reopened by others.' },
      { name: 'Keep your transcript', text: 'Save the full exchange, since the conversation is not publicly accessible and may be requested.' },
    ],
    formatNote:
      'An AMA reference to ChatGPT names the model owner, the tool and version, the date generated, and the tool URL, with the prompt described in the text. The output is non-retrievable, so the date and prompt carry the citation.',
    variations: [
      { q: 'Who is the author when citing ChatGPT in AMA?', a: 'The organization that developed the model, such as OpenAI, is treated as the author, since no human author wrote the response.' },
      { q: 'Why does AMA need the exact date for a ChatGPT citation?', a: 'Because the model is updated and the same prompt produces different answers over time, so the date fixes which response you used.' },
      { q: 'Do I include the prompt when citing ChatGPT in AMA?', a: 'Yes. The prompt is essential context because the reader cannot retrieve the conversation, so state it in the text or a note.' },
      { q: 'Can readers open the ChatGPT conversation I cited in AMA?', a: 'No. A private chat is not publicly retrievable, so AMA relies on the prompt, date, model version, and your saved transcript instead.' },
    ],
    faq: [
      { q: 'Is a ChatGPT response a retrievable source in AMA?', a: 'No. The conversation cannot be reopened by others, so the citation depends on the model, version, date, and the prompt you record.' },
      { q: 'Which version of ChatGPT should I name in AMA?', a: 'Name the specific model or version you used, because different versions return different answers to the same prompt.' },
    ],
  },
];
