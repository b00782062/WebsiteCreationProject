<script>
import { get, writable } from "svelte/store";

import { supabase } from "../supabase.js";
import { v4 as uuidv4 } from 'uuid';


export const Fname = writable('');
export const email = writable('');
export const phone = writable('');
export const message = writable('');


let state = {
  username :'',
  email:'',
  phone:'',
  message:''
}

export const onSubmit = async () => {

  Fname.update( () => {
    const newName =  state.username
    
    return newName;
  });
  email.update( () => {
    const newName =  state.email
    
    return newName;
  });
  phone.update( () => {
    const newName =  state.phone
    
    return newName;
  });
  message.update( () => {
    const newName =  state.message
    
    return newName;
  });

  const {data, error} = await supabase.from('contact')
  .insert([
    {
    Fname: get(Fname), 
    email: get(email),
    phone: get(phone),
    message: get(message),
    user_id : uuidv4(),
  }
  ]);

  if(error){
    return console.error(error)
  }

}



</script>

<h1>Feel free to contact me using this form</h1>

<section>
  <div class="row">
    <div class="column">
      <h3>Don’t hesitate to reach out</h3><br>
        <p>You can do so through my social links<br>
        or the form on the right</p>
        <br>
        <h3>or</h3>
        <br>
        <p>If you are ever in Paris, hit me up for a cup of coffee and I will surely respond.
      </p>
    </div>
    <div class="column">
      <form class="form-wrapper" on:submit|preventDefault={onSubmit}>
        <div class="row">
          <div class="column">
            <div class="form-element">
              <label for="Name">Name</label>
              <input required minlength="2" maxlength="20" id="Name" type="text" bind:value={state.username} placeholder="Family Name" />
            </div>
            <div class="form-element">
              <label for="Email">Email</label>
              <input required id="Email" type="email" bind:value={state.email} placeholder="Email" />
            </div>
            <div class="form-element">
              <label for="PhoneNumber">Phone Number</label>
              <input required id="PhoneNumber"  maxlength="15" type="tel" pattern=^[0-9]*$
      
              bind:value={state.phone} placeholder="Phone Number" />
            </div>
          </div>
      
          <div class="column" style="display:flex; align-items:center">
            <div class="form-element">
              <label for="Comment">Your message: </label>
              <textarea id="Comment" bind:value={state.message} style="height:220px" />
            </div>
          </div>
        </div>
        <div style="display:flex; justify-content:end">
          <button type="submit"style="width:fit-content">Send !</button>
        </div>
      </form>
    </div>
    </div>
  </section>



<style>
  h1 {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  }
  .form-wrapper {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    display: grid;
    justify-content: center;
    align-items: center;
  }

  .form-element {
    display: flex;
    padding: 10px;
    flex-direction: column;
    content: "";
    clear: both;
  }

  .row {
    display: flex;
  }

  label {
    margin-bottom: 5px;
  }
</style>
