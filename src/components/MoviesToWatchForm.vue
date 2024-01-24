<template>
    <form>
        <!-- Gebruik voor een goed visueel resultaat, voor elke formulierveld dat 
        je toevoegt het onderstaande element als wrapper. -->
        <div class="form-control">

        </div>
        <!-- -->
        
        <div>
            <button>Verzenden</button>
        </div>
    </form>
</template>

<style scoped>
  form {
    margin: 2rem 2rem;
    max-width: 50%;
    padding: 2rem;
    background-color: #ffffff;
  }

  .form-control {
    margin: 1rem 0;
  }

  label {
    font-weight: bold;
    font-size: 1rem;
  }

  p {
      padding: 1rem;
      color: white;
      background-color: #ff726f;
  }

  input,
  select,
  textarea {
    display: block;
    width: 100%;
    font: inherit;
    margin-top: 0.5rem;
    border: 1px solid #ccc;
  }

  input:focus,
  select:focus,
  textarea:focus {
    outline: none;
    border-color: #beb7df;
    background-color: #d4f2d2;
  }

  select {
    width: 100%;
  }

  input[type="checkbox"] {
    display: inline-block;
    width: auto;
    margin-right: 1rem;
  }

  input[type="checkbox"] + label {
    font-weight: normal;
  }

  button {
    font: inherit;
    border: 1px solid #aba9bf;
    background-color: #aba9bf;
    color: white;
    cursor: pointer;
    padding: 0.75rem 2rem;
  }

  button:hover,
  button:active {
    border-color: #34113f;
    background-color: #34113f;
  }

  .form-control.invalid input,
  .form-control.invalid select,
  .form-control.invalid textarea {
    border-color: red;
  }

  .form-control.invalid label {
    color: red;
  }
</style>