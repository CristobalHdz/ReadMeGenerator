function renderLicenseBadge(data) {
  let badge = "";
  if (data.license == "Mozilla") {
    badge = `[![License](https://img.shields.io/badge/License-Mozilla-green)](https://opensource.org/licenses/MPL-2.0)`;
  } else if (data.license == "Apache") {
    badge = `[![License](https://img.shields.io/badge/License-Apache-blue)](https://opensource.org/licenses/Apache-2.0)`
  } else if (data.license == "MIT") {
    badge = `[![License](https://img.shields.io/badge/License-MIT-green)](https://opensource.org/licenses/MIT)`
  } else if (data.license == "OVL GPL") {
    badge = `[![License](https://img.shields.io/badge/License-Apache-blue)](https://opensource.org/licenses/Apache-2.0)`
  } else if (data.license == "Common Developer 1.0") {
    badge = `[![License](https://img.shields.io/badge/License-CDDL-green)](https://opensource.org/licenses/CDDL-1.0)`
  } else {
    badge = `[![License](https://img.shields.io/badge/License-No_License-red)]`
  }
  return badge
};

function tablecontributors(data) {
  if (data.contributorConfirm) {
    return `* [Project contributors](#contributors)`
  } else {
    return ""
  }
};

function tableInstallation(data) {
  if (data.instConfirm) {
    return `* [Installation Notes](#installation)`
  } else {
    return ""
  }
};

function tableInstructions(data) {
  if (data.instructionsConfirm) {
    return `* [Project Instructions](#instructions)`
  } else {
    return ""
  }
};

function rendercontributors(data) {
  if (data.contributorConfirm) {
    return `## Project contributors
    ${data.contributors}`
  } else {
    return ""
  }
};

function renderInstallation(data) {
  if (data.instConfirm) {
    return `## Installation Notes
    ${data.installation}`
  } else {
    return ""
  }
};

function renderInstructions(data) {
  if (data.instructionsConfirm) {
    return `## Project Instructions
    ${data.instructions}`
  } else {
    return ""
  }
};

function generateMarkdown(data) {
  return `
  # ${data.title}

  ${renderLicenseBadge(data)}

  ## Table of Contents
  * [Project owner info](#username)
  * [Project Description](#description)
  ${tablecontributors(data)}
  ${tableInstallation(data)}
  ${tableInstructions(data)}

  ## Project owner info
  Github info:
  </br>
  [${data.username}] github.com/${data.username}
  </br>
  User email:
  ${data.email}

  ## Project Description
  ${data.description}

  ${rendercontributors(data)}

  ${renderInstallation(data)}

  ${renderInstructions(data)}

`;
}

module.exports = generateMarkdown;
