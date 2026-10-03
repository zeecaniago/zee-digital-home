export const meredaySections = [
  { id: "a-small-place-to-start", title: "A small place to start" },
  { id: "before-and-after", title: "Before and after the move" },
  { id: "a-way-back", title: "A way back" },
  { id: "a-routine-you-can-understand", title: "A routine you can understand" },
  { id: "where-it-is-now", title: "Where it is now" },
];

export function BuildingMereday() {
  return <>
    <p className="lead">I’m working on <a href="https://mereday.app">Mereday</a>, a native Mac app that gives Desktop files and Downloads a home. It is a small project with a question at its center: what does automation need to show us before we feel comfortable letting it touch our files?</p>

    <h2 id="a-small-place-to-start">A small place to start</h2>
    <p>A Desktop collects the things we need within reach. Downloads collects the things we have just received. Both are useful landing places, and both can become difficult to navigate once the work that put something there is finished.</p>
    <p>Mereday starts with those two places. Desktop items move into an archive you choose, grouped into daily or monthly folders. Downloads sorting is optional: it places files into Documents, Images, Videos, Audio, Archives, Installers, and Other, inside the selected Downloads folder.</p>
    <p>The current app has a deliberately small scope. Organizing moves files into folders and keeps them. Cleanup and deletion are outside this version. That makes the main interaction easier to explain: choose your folders, inspect the proposed moves, and organize when you are ready.</p>

    <h2 id="before-and-after">Before and after the move</h2>
    <p>A tidy screen is only part of a useful result. You also need to know where everything went. Mereday makes that information visible on both sides of an organizing session.</p>
    <p>Before a run, the preview shows proposed destinations, skipped downloads, and setup issues. You can filter by file type or reveal a source item in Finder. Reading the preview does not move files or create archive folders.</p>
    <p>There is an important boundary here: the preview is a snapshot. Files can arrive, change, or disappear while you are looking at it. When organizing begins, the app checks the current files, permissions, and destination names again. A preview helps you understand the operation; it does not freeze the filesystem.</p>
    <p>Afterward, a receipt records the outcome of each attempted move. It shows destinations and failures, giving you a place to inspect what actually happened. The distinction between a proposed action and a recorded outcome matters even in a utility this small.</p>

    <h2 id="a-way-back">A way back</h2>
    <p>Undo is part of the organizing flow. From a receipt, you can restore eligible items to their original locations. The app first checks that the moved file still matches and that its original name is free.</p>
    <p>Suppose you archive a document, then create a new document with the same name on your Desktop. Undo should leave that new file alone. Mereday leaves the conflicting item for review. During organizing, matching destination names receive a numbered suffix so existing files stay intact.</p>
    <blockquote>Automation becomes easier to trust when you can see its decisions, inspect its results, and understand the conditions for reversing them.</blockquote>
    <p>This also shapes how interrupted operations are handled. Receipts track moves before and after execution. If the result is ambiguous, the app leaves it for manual review. A confident-looking success message would be less useful than an honest account of uncertainty.</p>

    <h2 id="a-routine-you-can-understand">A routine you can understand</h2>
    <p>The app is built with Swift and SwiftUI. It uses the Mac’s sandbox and access to folders you select, with saved permissions for later sessions. There is no account or AI service required, and receipts are stored locally on your Mac.</p>
    <p>You can organize manually or choose a shared daily or weekly schedule for Desktop and Downloads. Scheduled work runs while the app is running, including when its window is closed and it remains in the menu bar. It does not wake the Mac. Launch at login is an optional setting.</p>
    <p>Downloads need a little extra care. The sorter leaves existing folders, packages, hidden items, and symbolic links in place. It skips known incomplete download types and files modified in the last sixty seconds. Those checks reduce the chance of moving something still being written, though they cannot identify every unfinished download.</p>
    <p>Reports provide a weekly or monthly view of recorded moves and their destinations. Undo removes those moves from their original period’s totals. The numbers describe the history in the receipts; they are not a live inventory or a claim about disk space saved.</p>

    <h2 id="where-it-is-now">Where it is now</h2>
    <p>Mereday is in development. Desktop tidying, optional Downloads sorting, previews, receipts, Undo, scheduling, and reports are working in the current build. A public Mac download is still coming soon.</p>
    <p>The website has an interactive demo using sample files, so you can explore the flow without giving it access to your own folders. You can try it at <a href="https://mereday.app">mereday.app</a>.</p>
    <p>For me, this project brings familiar engineering concerns into an everyday interaction: permissions, changing state, partial failures, and recovery. The aim is a useful little routine whose behavior stays understandable, even when something does not go as planned.</p>
  </>;
}
