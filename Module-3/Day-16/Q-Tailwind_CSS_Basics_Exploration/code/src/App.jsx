
function App() {
  return (
    <>

<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>Tailwind CSS UI Assignment</title>
  <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-gray-100 text-gray-800">

  {/* <!-- ================= NAVBAR ================= --> */}
  <nav class="bg-white shadow p-4 flex flex-col md:flex-row md:justify-between md:items-center gap-4">
    <h1 class="text-xl font-bold">TailwindUI</h1>
    <div class="flex flex-col md:flex-row gap-4">
      <a href="#" class="hover:text-blue-600">Home</a>
      <a href="#" class="hover:text-blue-600">Features</a>
      <a href="#" class="hover:text-blue-600">Contact</a>
    </div>
  </nav>

  {/* <!-- ================= HERO SECTION ================= --> */}
  <section class="p-6 md:p-12 flex flex-col md:flex-row items-center gap-8">
    <div class="flex-1">
      <h2 class="text-xl md:text-3xl lg:text-5xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 text-transparent bg-clip-text mb-4">
        Build Fast with Tailwind CSS
      </h2>
      <p class="text-gray-600">
        Utility-first CSS framework for rapid UI development.
      </p>
    </div>

    {/* <!-- Image with hover effect --> */}
    <div class="flex-1">
      <img
        src="https://picsum.photos/400/250"
        class="rounded-lg shadow-lg transition-transform duration-300 hover:scale-105"
        alt="Hero"
      />
    </div>
  </section>

  {/* <!-- ================= BUTTON ================= --> */}
  <div class="text-center my-8">
    <button
      class="bg-gray-200 rounded px-6 py-2 transition
             hover:bg-gray-300 active:bg-gray-400">
      Click Me
    </button>
  </div>

  {/* <!-- ================= LIST ================= --> */}
  <section class="p-6">
    <ul class="list-disc list-inside pl-5 space-y-2">
      <li class="hover:text-blue-600">Utility-first styling</li>
      <li class="hover:text-blue-600">Responsive design</li>
      <li class="hover:text-blue-600">Fast development</li>
    </ul>
  </section>

  {/* <!-- ================= FEATURES GRID ================= --> */}
  <section class="p-6">
    <h3 class="text-2xl font-bold mb-6">Features</h3>
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      
      {/* <!-- Card --> */}
      <div class="bg-white p-4 rounded shadow">
        <img src="https://picsum.photos/300/150" class="rounded mb-3" />
        <h4 class="font-bold text-lg">Fast</h4>
        <p class="text-sm text-gray-600 mb-3">Build UI quickly with utilities.</p>
        <button class="bg-gray-200 rounded px-4 py-1 hover:bg-gray-300 active:bg-gray-400">
          Learn More
        </button>
      </div>

      <div class="bg-white p-4 rounded shadow">
        <img src="https://picsum.photos/300/150" class="rounded mb-3" />
        <h4 class="font-bold text-lg">Responsive</h4>
        <p class="text-sm text-gray-600 mb-3">Mobile-first design.</p>
        <button class="bg-gray-200 rounded px-4 py-1 hover:bg-gray-300 active:bg-gray-400">
          Learn More
        </button>
      </div>

      <div class="bg-white p-4 rounded shadow">
        <img src="https://picsum.photos/300/150" class="rounded mb-3" />
        <h4 class="font-bold text-lg">Customizable</h4>
        <p class="text-sm text-gray-600 mb-3">Extend easily.</p>
        <button class="bg-gray-200 rounded px-4 py-1 hover:bg-gray-300 active:bg-gray-400">
          Learn More
        </button>
      </div>

    </div>
  </section>

  {/* <!-- ================= TABLE ================= --> */}
  <section class="p-6 overflow-x-auto">
    <table class="w-full border border-gray-300 bg-white">
      <thead class="bg-gray-200">
        <tr>
          <th class="border p-2">Name</th>
          <th class="border p-2">Role</th>
          <th class="border p-2">Status</th>
        </tr>
      </thead>
      <tbody>
        <tr class="odd:bg-gray-50 hover:bg-gray-100">
          <td class="border p-2">Alex</td>
          <td class="border p-2">Developer</td>
          <td class="border p-2">Active</td>
        </tr>
        <tr class="odd:bg-gray-50 hover:bg-gray-100">
          <td class="border p-2">Sam</td>
          <td class="border p-2">Designer</td>
          <td class="border p-2">Inactive</td>
        </tr>
        <tr class="odd:bg-gray-50 hover:bg-gray-100">
          <td class="border p-2">Jamie</td>
          <td class="border p-2">Manager</td>
          <td class="border p-2">Active</td>
        </tr>
      </tbody>
    </table>
  </section>

  {/* <!-- ================= FORM ================= --> */}
  <section class="p-6 max-w-md mx-auto bg-white rounded shadow my-10">
    <h3 class="text-xl font-bold mb-4">Contact Us</h3>

    <form class="space-y-4">
      <input
        type="text"
        placeholder="Name"
        class="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
      <input
        type="email"
        placeholder="Email"
        class="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
      <input
        type="password"
        placeholder="Password"
        class="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
      <button
        type="submit"
        class="w-full bg-blue-500 text-white rounded py-2 hover:bg-blue-600">
        Submit
      </button>
    </form>
  </section>

</body>
</html>

    </>
  )
}

export default App
