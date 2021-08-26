// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "Mozilla") {
    badge = `[![License](https://img.shields.io/badge/License-Mozilla-green)](https://opensource.org/licenses/MPL-2.0)`;
  } else if (license === "Apache") {
    badge = `[![License](https://img.shields.io/badge/License-Apache-blue)](https://opensource.org/licenses/Apache-2.0)`
  } else if (license === "MIT") {
    badge = `[![License](https://img.shields.io/badge/License-MIT-green)](https://opensource.org/licenses/MIT)`
  } else if (license === "OVL GPL") {
    badge = `[![License](https://img.shields.io/badge/License-Apache-blue)](https://opensource.org/licenses/Apache-2.0)`
  } else if (license === "Common Developer 1.0") {
    badge = `[![License](https://img.shields.io/badge/License-CDDL-green)](https://opensource.org/licenses/CDDL-1.0)`
  } else {
    badge = `[![License](https://img.shields.io/badge/License-No_License-red)]`
  }
  return badge
};

function generateMarkdown(data) {
  return `
  # ${data.title}

  ${renderLicenseBadge}

  ## Table of Contents
  * [Project owner info](#username)
  * [Project Description](#description)
  * [Project contributors](#contributors)
  * [Instalation Notes](#installation)
  * [Project Instructions](#instructions)

  ## Project owner info
  Github info
  [${data.username}] github.com/${data.username}
  [${data.email}]

  ## Project Description
  ${data.description}

  ## Project contributors
  ${data.contributors}

  ## Instalation Notes
  ${data.installation}

  ## Project Instructions
  ${data.instructions}

`;
}

module.exports = generateMarkdown;
