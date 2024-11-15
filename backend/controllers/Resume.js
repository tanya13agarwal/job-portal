const path = require('path');
const { exec } = require('child_process');
const fs = require('fs');


exports.compileLatex = (req, res) => {
  const { formData } = req.body;

  // Dynamic LaTeX Template
  const latexTemplate = `
\\documentclass[a4paper,10pt]{article}
\\usepackage[utf8]{inputenc}
\\usepackage[margin=1in]{geometry}
\\usepackage{hyperref}
\\usepackage{xcolor}
\\definecolor{darkblue}{rgb}{0.0,0.2,0.6}

\\begin{document}

\\begin{center}
    \\textbf{\\Huge ${formData.name}}\\\\
    \\vspace{2mm}
    ${formData.location} | ${formData.phone} | ${formData.email} | \\href{${formData.website}}{${formData.website}}\\\\
    \\href{${formData.linkedin}}{LinkedIn} | \\href{${formData.github}}{GitHub}
\\end{center}

\\section*{Objective}
${formData.objective}

\\section*{Education}
${formData.education
  .map(
    (edu) =>
      `\\textbf{${edu.institute}} (${edu.dates}): ${edu.degree} [GPA: ${edu.gpa}]\\\\`
  )
  .join('\n')}

\\section*{Experience}
${formData.experience
  .map(
    (exp) => `\\textbf{${exp.role} at ${exp.company} (${exp.dates}, ${exp.location})}\\\\
\\begin{itemize}
    ${exp.bullets.map((b) => (b ? `\\item ${b}` : '')).join('\n')}
\\end{itemize}`
  )
  .join('\n')}

\\section*{Projects}
${formData.projects
  .map(
    (proj) =>
      `\\textbf{${proj.name}} (${proj.tools}): ${proj.description}\\\\
\\href{${proj.link}}{${proj.link}}\\\\`
  )
  .join('\n')}

\\section*{Skills}
\\textbf{Languages:} ${formData.languages}\\\\
\\textbf{Technologies:} ${formData.technologies}

\\end{document}
      `;

  const texFilePath = path.join(__dirname, 'temp.tex');
  const pdfFilePath = path.join(__dirname, 'temp.pdf');

  fs.writeFileSync(texFilePath, latexTemplate);

  exec(`pdflatex -output-directory=${path.dirname(texFilePath)} ${texFilePath}`, (error, stdout, stderr) => {
    if (error) {
      console.error(`Error: ${stderr}`);
      return res.status(500).json({ error: 'Failed to compile LaTeX' });
    }

    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader('Content-Disposition', 'attachment; filename=resume.pdf');

    const readStream = fs.createReadStream(pdfFilePath);
    readStream.pipe(res);

    readStream.on('close', () => {
      fs.unlinkSync(texFilePath);
      fs.unlinkSync(pdfFilePath);
    });
  });
};
