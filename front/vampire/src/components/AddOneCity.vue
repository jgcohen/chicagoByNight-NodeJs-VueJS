<template>
<form @submit="onSubmit"  class="row g-3 needs-validation" novalidate>
  <div class="col-md-6">
    <label for="validationCustom03" class="form-label">City</label>
    <input type="text" v-model="name" class="form-control" id="validationCustom03" required>
    <div class="invalid-feedback">
      Please provide a valid city.
    </div>
  <div class="col-12">
    <button class="btn btn-primary" type="submit">Submit City</button>
  </div>
  </div>
</form>
</template>

<script>
export default {
    name: 'AddOneCity',
    data() {
        return {
            name: ''
        }
    },
    methods: {
        onSubmit(e){
            e.preventDefault();
            
            if(! this.name){
                alert('Please add a name')
            }

            const NewCity = {
                name: this.name
            }
            this.$emit('add-city', NewCity)
            this.name = ''
        }
    }

}
</script>