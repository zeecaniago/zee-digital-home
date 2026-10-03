export const meredaySections = [
  { id: "a-small-place-to-start", title: "Organizing Desktop and Downloads" },
  { id: "before-and-after", title: "Previewing and recording changes" },
  { id: "a-way-back", title: "Undoing changes" },
  { id: "a-routine-you-can-understand", title: "Running Mereday" },
  { id: "where-it-is-now", title: "Current progress" },
];

export function BuildingMereday() {
  return <>
    <p className="lead">I am building <a href="https://mereday.app">Mereday</a>, a native Mac app for organizing files on the Desktop and in Downloads. I want the app to make it clear what it will move, where the files will go, and how to reverse a move when possible.</p>

    <h2 id="a-small-place-to-start">Organizing Desktop and Downloads</h2>
    <p>The Desktop is useful for files we need close at hand. Downloads holds files we have just received. Both can become hard to navigate when files remain there after we have finished using them.</p>
    <p>Mereday starts with these two folders. It moves Desktop items into an archive you choose, grouped by day or month. Downloads sorting is optional. It sorts files into Documents, Images, Videos, Audio, Archives, Installers, and Other within the selected Downloads folder.</p>
    <p>The current version only organizes files. It keeps them and does not include cleanup or deletion. You choose the folders, review the proposed moves, and organize when you are ready.</p>

    <h2 id="before-and-after">Previewing and recording changes</h2>
    <p>After files are moved, you still need to know where they went. Mereday shows what it plans to do before a run and records what happened after it.</p>
    <p>The preview shows proposed destinations, skipped downloads, and setup issues. You can filter by file type or reveal a source item in Finder. Viewing the preview does not move files or create archive folders.</p>
    <p>The preview is a snapshot. Files can arrive, change, or disappear while you are reviewing it. When organizing begins, the app checks the current files, permissions, and destination names again. The preview explains the proposed moves, but it cannot guarantee that the filesystem will stay unchanged.</p>
    <p>After a run, a receipt records the outcome of each attempted move, including destinations and failures. It gives you a record of what actually happened.</p>

    <h2 id="a-way-back">Undoing changes</h2>
    <p>You can use a receipt to restore eligible items to their original locations. Before restoring a file, the app checks that it still matches the file that was moved and that its original name is available.</p>
    <p>For example, you might archive a document and then create a new document with the same name on your Desktop. Mereday leaves the conflicting item for review instead of overwriting the new file. During organizing, the app adds a numbered suffix when a destination name is already in use, so existing files are kept intact.</p>
    <p>Undo has limits, and those limits need to be clear. Being able to inspect the proposed moves, the results, and the conditions for reversing them makes the app easier to trust.</p>
    <p>Interrupted operations need the same care. Receipts track moves before and after execution. If the outcome is unclear, the app leaves the item for manual review rather than reporting success.</p>

    <h2 id="a-routine-you-can-understand">Running Mereday</h2>
    <p>Mereday is built with Swift and SwiftUI. It uses the Mac sandbox and saves access permissions for the folders you select, so it can use them again in later sessions. It does not require an account or an AI service. Receipts are stored locally on your Mac.</p>
    <p>You can organize manually or set a shared daily or weekly schedule for Desktop and Downloads. Scheduled runs work while the app is running, including when its window is closed and it stays in the menu bar. The app does not wake the Mac. Launch at login is optional.</p>
    <p>Downloads sorting needs extra checks because a file may still be downloading. The sorter leaves existing folders, packages, hidden items, and symbolic links in place. It also skips known incomplete download types and files modified in the last sixty seconds. These checks reduce the chance of moving a file that is still being written, but they cannot identify every unfinished download.</p>
    <p>Reports show recorded moves and their destinations by week or month. Undo removes a move from the totals for the period when it originally happened. These reports reflect the receipts. They are not a live inventory of your files and do not measure disk space saved.</p>

    <h2 id="where-it-is-now">Current progress</h2>
    <p>Mereday is still in development. Desktop organizing, optional Downloads sorting, previews, receipts, Undo, scheduling, and reports work in the current build. A public Mac download is coming soon.</p>
    <p>The website has an interactive demo with sample files. You can try the flow at <a href="https://mereday.app">mereday.app</a> without giving it access to your folders.</p>
    <p>Building Mereday gives me a practical way to work on familiar engineering problems: permissions, changing state, partial failures, and recovery. My aim is a useful tool whose behavior is clear, including when a move fails or needs review.</p>
  </>;
}
