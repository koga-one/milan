/*jslint
    white: true,
    browser: true,
    vars: true
*/

/**
 * Generates a table of contents for your document based on the headings
 *  present. Anchors are injected into the document and the
 *  entries in the table of contents are linked to them. The table of
 *  contents will be generated inside of the first element with the id `toc`.
 * @param {HTMLDOMDocument} documentRef Optional A reference to the document
 *  object. Defaults to `document`.
 * @author Matthew Christopher Kastor-Inare III
 * @version 20130726
 * @example
 * // call this after the page has loaded
 * htmlTableOfContents();
 */
 function htmlTableOfContents (documentRef) {
    var documentRef = documentRef || document;
    var toc = documentRef.getElementById('toc-content');
    var headings = [].slice.call(documentRef.body.querySelectorAll('h3, h4, h5, h6'));
    var currentLi;
    var currentCollapse;
    var currentSubUl;

    headings.forEach(function (heading, index) {
        var nospace = heading.textContent.toLowerCase().replace(' ', '-');

        var anchor = documentRef.createElement('a');
        anchor.setAttribute('id', nospace);

        heading.parentNode.insertBefore(anchor, heading);


        if (heading.tagName == "H6")
        {
            if (currentCollapse != null)
            {
                currentLi.appendChild(currentCollapse);
            }

            currentLi = documentRef.createElement('li');
            currentLi.setAttribute('class', 'mt-1');
            
            var expand = documentRef.createElement('button');
            expand.setAttribute('type', 'button');
            expand.setAttribute('href', '#' + nospace);
            expand.setAttribute('data-bs-toggle', 'collapse');
            expand.setAttribute('data-bs-target', '#collapse' + nospace);
            expand.setAttribute('aria-expanded', 'false');
            expand.setAttribute('aria-controls', 'collapse' + nospace)
            expand.setAttribute('class', 'btn btn-sm fw-bolder btn-primary');
            expand.textContent = '>';
            
            var label = documentRef.createElement('a');
            label.setAttribute('href', '#' + nospace);
            label.setAttribute('class', 'btn btn-sm ms-1 btn-outline-primary fw-bolder');
            label.textContent = heading.textContent;
            
            //h6.appendChild(label);
            //expand.appendChild(arrow);
            currentLi.appendChild(expand);
            currentLi.appendChild(label);
            // currentLi.appendChild(buttonGroup);
            toc.appendChild(currentLi);
            
            // Set the new one
            currentCollapse = documentRef.createElement('div');
            currentCollapse.setAttribute('class', 'collapse');
            currentCollapse.setAttribute('id', 'collapse' + nospace);

            currentSubUl = documentRef.createElement('ul');
            currentSubUl.setAttribute('class', 'list-unstyled fw-normal pb-1 small');
            currentCollapse.appendChild(currentSubUl);
        }
        else
        {
            var subLi = documentRef.createElement('li');
            subLi.setAttribute('class', '');
            
            var sublink = documentRef.createElement('a');
            sublink.setAttribute('href', '#' + nospace);
            sublink.setAttribute('class', 'mt-1 text-muted text-start btn btn-sm btn-outline-secondary text-decoration-none')
            sublink.textContent = heading.textContent;

            subLi.appendChild(sublink);

            currentSubUl.appendChild(subLi);
        }
    });

    // Append the collapse from the last h6
    if (currentCollapse != null)
    {
        toc.appendChild(currentCollapse);
    }
}

try {
     module.exports = htmlTableOfContents;
} catch (e) {
    // module.exports is not defined
}

// <button class="btn" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
//     <p class="h6 text-primary">Button with data-bs-target</p>
// </button>
// <div class="collapse" id="collapseExample">
//     <div class="card card-body">
//       Some placeholder content for the collapse component. This panel is hidden by default but revealed when the user activates the relevant trigger.
//     </div>
// </div>