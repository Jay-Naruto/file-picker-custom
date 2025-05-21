# 📂 Custom File Picker

A custom file picker that mimics Google Drive’s interface and Finder-style navigation. This tool enables users to browse, index, and de-index files and folders in a Google Drive-like view.



## ✨ Features

- Navigate folders using **Back/Forward** buttons (like macOS Finder)
- **Search**, **Sort by Name/Date**, and **Filter**
- Index and De-index files individually or in bulk
- Visually responsive UI built with **shadcn/ui** and **Tailwind CSS**
- Built with **SOLID design principles** and clean component architecture
- Only table **rows** re-render on navigation (low CLS)



## 🧱 Tech Stack

- **Next.js 14 (App Router)**
- **React + TypeScript**
- **Tailwind CSS + shadcn/ui**
- **Zustand** (state management)
- **Lighthouse-tested** for performance (low CLS)



## 🧩 Project Structure

```
/components/FilePicker
  ├── TableBody.tsx            # Shell layout
  ├── TableRows.tsx            # Only renders rows
  ├── TableToolbar.tsx         # Sort and Search
  ├── FooterActions.tsx        # Bulk actions
  ├── BackForwardNav.tsx       # Folder navigation
  ├── TableRow.tsx             # Single row layout
  ├── TableLayout.tsx          # Table layout

/hooks
  └── useFiles.ts              # Mock file fetching

/store
  └── filePickerStore.ts       # Zustand global state
```



## ⚠️ API Notice

The original backend API for fetching Google Drive contents was **not functional** during development. The company confirmed:

> “Yes, it's happening, unfortunately, I don't have time to fix that. Can you fake the response, or create your own Google Drive connection?”

Therefore, I used **mock data** to simulate a realistic file system and behaviors like indexing and folder navigation.



## 🚀 Getting Started

### 1. Clone

```bash
git clone https://github.com/Jay-Naruto/file-picker-custom.git .
```

### 2. Install

```bash
pnpm install
# or
npm install
```

### 3. Run Dev Server

```bash
pnpm dev
# or
npm run dev
```

Open `http://localhost:3000` in your browser.



## 📊 Performance Notes

- ✅ Lighthouse-tested with **low CLS**
- ✅ Folder changes **only re-render file rows**, not entire table
- ✅ Optimized with `useMemo` and Zustand to prevent unnecessary renders
- ✅ UI split for performance: rows, layout, and controls isolated



## 🧭 Future Improvements

- Integrate real API when backend is fixed




## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`NEXT_PUBLIC_STACKAI_EMAIL`

`NEXT_PUBLIC_STACKAI_PASSWORD`

`NEXT_PUBLIC_STACKAI_ANON_KEY`

`NEXT_PUBLIC_STACKAI_CONNECTION_ID`

`NEXT_PUBLIC_STACKAI_BASE_URL`





## ✅ Summary

This project is a robust, fast, and modular file picker UI using mocked Google Drive data due to a broken API. All major UI/UX and performance criteria have been met through component reusability, state sharing with Zustand, and optimized rendering practices.
