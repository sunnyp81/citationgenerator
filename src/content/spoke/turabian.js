// Turabian (author-date) source-type spoke editorial.
// This generator uses Turabian author-date, the student adaptation of Chicago.
// In the text you cite author and year in parentheses with a page where relevant;
// the reference list entry leads with the author surname first, then the year,
// and is the form students use for theses and term papers.

export default [
  {
    styleId: 'turabian',
    sourceId: 'journal-article',
    answer:
      'To cite a journal article in Turabian author-date, lead with the author surname first, then the year, the article title in quotation marks, the journal name in italics, the volume and issue, and the page range, with the DOI or URL at the end. In the text you cite author and year in parentheses.',
    steps: [
      { name: 'List the author surname first', text: 'Give the first author surname first, then any further authors in normal order, as the reference-list form requires.' },
      { name: 'Put the year after the author', text: 'Place the publication year right after the author, the defining move of the author-date system.' },
      { name: 'Quote the article title', text: 'Put the article title in quotation marks and in headline-style title case.' },
      { name: 'Italicize the journal', text: 'Set the journal name in italics, then give the volume and issue.' },
      { name: 'Give the page range', text: 'Add the inclusive page numbers for the article.' },
      { name: 'Add the DOI or URL', text: 'End with the DOI or a stable URL for an article read online.' },
    ],
    formatNote:
      'A Turabian author-date journal entry runs author, year, quoted article title, italic journal, volume(issue), pages, and DOI or URL. In the text you cite author and year, adding a page number for a direct quotation.',
    variations: [
      { q: 'How do I cite a journal article in Turabian author-date?', a: 'Lead the reference with the author and year, and cite author and year in parentheses in the text, with a page for a quotation.' },
      { q: 'How do I cite an article with multiple authors in Turabian?', a: 'List the authors in published order, inverting only the first. For long lists Turabian shortens to the first author and et al. in the text.' },
      { q: 'Do I need a DOI for a Turabian journal citation?', a: 'Include the DOI when the article has one, as it is the most stable link. A stable URL is the fallback.' },
      { q: 'Is the article title italicized in Turabian?', a: 'No. The article title takes quotation marks and the journal name is italicized.' },
    ],
    faq: [
      { q: 'How does Turabian author-date differ from notes-bibliography?', a: 'Author-date cites author and year in parentheses with a reference list, while notes-bibliography uses footnotes and a bibliography. This generator uses author-date.' },
      { q: 'Where does the year go in a Turabian journal entry?', a: 'The year follows the author at the front of the entry, which is how the author-date system links to the in-text citation.' },
    ],
  },
  {
    styleId: 'turabian',
    sourceId: 'book',
    answer:
      'To cite a book in Turabian author-date, lead with the author surname first, then the year, the book title in italics, the edition, then the place and publisher. A chapter adds the chapter title in quotation marks and the editors of the whole book with the page range.',
    steps: [
      { name: 'List the author surname first', text: 'Give the author surname first, marking editors with ed. or eds. when the book is edited.' },
      { name: 'Put the year after the author', text: 'Place the publication year right after the author.' },
      { name: 'Italicize the book title', text: 'Set the full book title in italics and headline-style title case.' },
      { name: 'State the edition', text: 'Add the edition after the title when it is not the first.' },
      { name: 'Give place and publisher', text: 'Name the place of publication and the publisher.' },
      { name: 'Add a chapter if needed', text: 'For a chapter, quote the chapter title, then In the italic book title, the editors, place, publisher, and page range.' },
    ],
    formatNote:
      'A Turabian author-date book entry runs author, year, italic title, edition, place, publisher. For a chapter the quoted chapter title precedes the italic book title and its editors, with a page range.',
    variations: [
      { q: 'How do I cite a book chapter in Turabian author-date?', a: 'Give the chapter author and year, the chapter title in quotation marks, then In the italic book title, editors, place, publisher, and the chapter pages.' },
      { q: 'How do I cite an edited book in Turabian?', a: 'Put the editor in the author position marked ed., then the year, the italic title, place, and publisher.' },
      { q: 'How do I cite an e-book in Turabian?', a: 'Cite it as a book and add the format or the URL at the end, for example a Kindle note or a stable link, so the version is clear.' },
      { q: 'Does Turabian keep the place of publication for books?', a: 'Yes. Turabian gives the place of publication along with the publisher and year.' },
    ],
    faq: [
      { q: 'Is a book title italicized in Turabian?', a: 'Yes. Book titles are italic and in headline-style title case, while chapter titles use quotation marks.' },
      { q: 'Does Turabian need an edition number?', a: 'Only when the book is not the first edition. Place the edition after the title.' },
    ],
  },
  {
    styleId: 'turabian',
    sourceId: 'website',
    answer:
      'To cite a website in Turabian author-date, lead with the author or organization, then the year, the page title in quotation marks, the site name, the URL, and an access date when no publication date is shown. Turabian uses an access date mainly when the page is undated.',
    steps: [
      { name: 'Name the author', text: 'Use a personal author if named, otherwise the owning organization acts as the author.' },
      { name: 'Add the year', text: 'Give the year published or last updated right after the author.' },
      { name: 'Quote the page title', text: 'Put the page title in quotation marks, distinct from the site name.' },
      { name: 'Name the site', text: 'Name the website or sponsoring organization.' },
      { name: 'Paste the URL', text: 'Give the full direct URL to the page.' },
      { name: 'Add an access date if needed', text: 'Add the date you accessed the page when no publication or revision date is available.' },
    ],
    formatNote:
      'A Turabian author-date website entry runs author or organization, year, quoted page title, site name, and URL, with an access date when the page is undated. In the text you cite author and year.',
    variations: [
      { q: 'How do I cite a website with no author in Turabian?', a: 'Use the sponsoring organization as the author, or begin with the page title when none is named, then give the year and URL.' },
      { q: 'How do I cite a website with no date in Turabian?', a: 'Use an access date in place of the year, since Turabian relies on the access date mainly when no publication date exists.' },
      { q: 'When does Turabian require an access date for a website?', a: 'Mainly when the page carries no publication or revision date. With a clear date, the access date is often unnecessary.' },
      { q: 'Do I cite the page or the whole site in Turabian?', a: 'Cite the specific page you used, with its own quoted title and URL, not the homepage.' },
    ],
    faq: [
      { q: 'Does Turabian always need an access date for websites?', a: 'No. Turabian uses the access date chiefly when the page is undated, unlike styles that require it on every web source.' },
      { q: 'Is the site name italicized in Turabian?', a: 'The page title is quoted and the site or sponsor name is given in roman type, not italicized like a book.' },
    ],
  },
  {
    styleId: 'turabian',
    sourceId: 'youtube',
    answer:
      'To cite a YouTube video in Turabian author-date, treat the channel or uploader as the author, then the year, the video title in quotation marks, name YouTube as the site, and add the URL. A timestamp in the text marks the exact moment you used.',
    steps: [
      { name: 'Use the uploader as author', text: 'Put the channel name or person who posted the video in the author position.' },
      { name: 'Add the year', text: 'Give the year the video was uploaded right after the author.' },
      { name: 'Quote the video title', text: 'Put the video title in quotation marks as shown on its watch page.' },
      { name: 'Name the platform', text: 'Name YouTube as the site hosting the video, and note it is a video.' },
      { name: 'Paste the watch URL', text: 'Give the full youtube.com watch URL.' },
      { name: 'Add a timestamp', text: 'Note the timestamp in the text when you cite a specific moment in the video.' },
    ],
    formatNote:
      'A Turabian author-date video entry runs uploader, year, quoted video title, YouTube, and URL, with the medium noted as video. A timestamp in the text pinpoints the moment within the video.',
    variations: [
      { q: 'Who is the author for a YouTube video in Turabian?', a: 'The channel or account that uploaded the video is treated as the author. Use the channel name exactly as it appears.' },
      { q: 'How do I cite a specific moment in a YouTube video in Turabian?', a: 'Cite the whole video in the reference and give the timestamp, such as the minute and second, in your sentence.' },
      { q: 'How do I cite a YouTube video with no named author in Turabian?', a: 'Use the channel name as the author. If that is missing, begin with the quoted video title and keep the year.' },
      { q: 'Do I need an access date for a YouTube video in Turabian?', a: 'Usually not, because the upload date serves as the date. Add an access date only if no upload date is shown.' },
    ],
    faq: [
      { q: 'Is YouTube named as the site in Turabian?', a: 'Yes. YouTube is named as the hosting site, with the uploading channel treated as the author.' },
      { q: 'Do I include the video length in Turabian?', a: 'The duration is optional. Turabian focuses on uploader, year, title, platform, and URL.' },
    ],
  },
  {
    styleId: 'turabian',
    sourceId: 'image',
    answer:
      'To cite an image in Turabian author-date, lead with the creator, then the year, the image title in italics or a description, the medium, the repository or source, and the URL when online. A reproduced image is presented as a numbered figure and credited in the caption.',
    steps: [
      { name: 'Name the creator', text: 'Give the artist, photographer, or illustrator as the author of the image.' },
      { name: 'Add the year', text: 'State the year the image was created right after the creator.' },
      { name: 'Give a title or description', text: 'Italicize the work title, or supply a short description for an untitled image.' },
      { name: 'Note the medium', text: 'Give the medium, such as photograph or oil on canvas, where it matters.' },
      { name: 'Name the repository', text: 'Identify the museum, archive, or collection that holds the image.' },
      { name: 'Add the URL and a figure', text: 'For an online image add the URL, and when you reproduce the image present it as a numbered figure credited in the caption.' },
    ],
    formatNote:
      'A Turabian author-date image entry runs creator, year, italic title or description, medium, repository, and URL when online. A reproduced image is numbered as a figure and credited in its caption.',
    variations: [
      { q: 'How do I cite an image with no creator in Turabian?', a: 'Begin with the title or a description, add the year, then the medium, repository, and URL. The holding collection can act as the source.' },
      { q: 'How do I credit a reproduced figure in Turabian?', a: 'Present it as a numbered figure with a caption that names the creator, title, year, and source, and add a matching reference. Reuse may need permission.' },
      { q: 'How do I cite a painting versus a photograph in Turabian?', a: 'Both lead with the creator and year; give the medium, such as oil on canvas or photograph, and name the holding institution.' },
      { q: 'Do I need a URL for an online image in Turabian?', a: 'Yes. Add the URL for an image you viewed online so readers can reach the same version.' },
    ],
    faq: [
      { q: 'Are images presented as figures in Turabian?', a: 'When reproduced in your paper they are numbered figures credited in the caption, with a matching author-date reference.' },
      { q: 'Is an image title italicized in Turabian?', a: 'A formal work title is italicized; an untitled image takes a short plain description instead.' },
    ],
  },
  {
    styleId: 'turabian',
    sourceId: 'pdf',
    answer:
      'To cite a PDF in Turabian author-date, cite the underlying document, usually a report, leading with the author or organization, then the year, the title, the publisher, and the URL. Turabian cites the document, not the file format.',
    steps: [
      { name: 'Identify the document type', text: 'Decide whether the PDF is a report, government document, or article, and cite it in that form.' },
      { name: 'Name the author or organization', text: 'Use the personal author, or the issuing organization when no individual is named.' },
      { name: 'Add the year', text: 'Give the year of publication right after the author.' },
      { name: 'Give the title', text: 'Enter the full document title, italicized for a standalone report.' },
      { name: 'Add the publisher', text: 'Name the publisher or issuing body.' },
      { name: 'Add the URL', text: 'Give the direct URL to the PDF, and an access date if the document is undated.' },
    ],
    formatNote:
      'A Turabian author-date entry for a PDF document runs author or organization, year, title, publisher, and URL. Turabian cites by the nature of the document, not by the file format.',
    variations: [
      { q: 'How do I cite a government report PDF in Turabian?', a: 'Use the issuing agency as the author, add the year, give the report title and number, then the publisher and the URL.' },
      { q: 'How do I cite a PDF with no author in Turabian?', a: 'Use the issuing organization as the author. If none exists, begin with the title, and use an access date when the document is undated.' },
      { q: 'Do I write PDF in a Turabian citation?', a: 'No. Turabian cites the report or article, and the URL signals the online file without labeling it PDF.' },
      { q: 'How do I cite a journal article PDF in Turabian?', a: 'Cite it as a journal article with author, year, title, journal, volume, issue, and pages, since the PDF is a copy of that article.' },
    ],
    faq: [
      { q: 'Does Turabian have a separate PDF citation type?', a: 'No. You cite the underlying report or article, and the URL shows it was a downloadable file.' },
      { q: 'Do PDFs need a page number in Turabian?', a: 'Give a specific page in the in-text citation when you quote or reference one part of the document.' },
    ],
  },
  {
    styleId: 'turabian',
    sourceId: 'chatgpt',
    answer:
      'To cite ChatGPT in Turabian author-date, name the model owner such as OpenAI as the author, give the date the response was generated, identify the tool and version, note the prompt, and add the tool URL. Because the conversation is not publicly retrievable, the prompt, version, and date carry the citation.',
    steps: [
      { name: 'Name the model owner', text: 'Use the organization that owns the model, such as OpenAI, as the author.' },
      { name: 'Add the date', text: 'Give the date the response was generated, since the same prompt yields different answers over time.' },
      { name: 'Identify the tool and version', text: 'Name ChatGPT and the specific model or version you used.' },
      { name: 'Record the prompt', text: 'State the prompt in the text or a note, as it frames the response.' },
      { name: 'Add the tool URL', text: 'Give the URL of the tool even though the specific conversation cannot be reopened.' },
      { name: 'Save the transcript', text: 'Keep the full exchange, since the conversation is not publicly accessible.' },
    ],
    formatNote:
      'A Turabian author-date reference to ChatGPT names the model owner, the date generated, the tool and version, and the tool URL, with the prompt described in the text. The output is non-retrievable, so the prompt and date anchor it.',
    variations: [
      { q: 'Who is the author when citing ChatGPT in Turabian?', a: 'The organization that developed the model, such as OpenAI, is treated as the author, since no human wrote the response.' },
      { q: 'Why does Turabian need the date for a ChatGPT citation?', a: 'The model is updated and the same prompt changes answers over time, so the date fixes which response you used.' },
      { q: 'Do I include the prompt when citing ChatGPT in Turabian?', a: 'Yes. Readers cannot retrieve the conversation, so state the prompt in the text or a note as essential context.' },
      { q: 'Can readers open the ChatGPT chat I cited in Turabian?', a: 'No. A private conversation is not publicly retrievable, so Turabian relies on the model, version, date, prompt, and your saved transcript.' },
    ],
    faq: [
      { q: 'Is a ChatGPT response retrievable in Turabian?', a: 'No. The conversation cannot be reopened by others, so the citation rests on the model, version, date, and prompt you record.' },
      { q: 'Which ChatGPT version do I cite in Turabian?', a: 'Name the specific model or version you used, because versions differ in their answers to the same prompt.' },
    ],
  },
];
