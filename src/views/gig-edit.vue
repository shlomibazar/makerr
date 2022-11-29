<template>
    <section v-if="gigToEdit">
        <form @submit.prevent="saveGig" class="form">
            <div class="form-control">
                <label for="txt" class="form-label">Gig Name</label>
                <input required v-model="gigToEdit.name" id="txt" type="text" class="form-input"
                    placeholder="Enter your gig name here..." />
            </div>
            <div class="form-control">
                <label for="inStock" class="form-label">Gig Price</label>

                <input required v-model.number="gigToEdit.price" id="inStock" type="number" class="form-input" />
            </div>
            <div class="btn-group">
                <button @click="saveGig" class="btn btn-info">save</button>
                <button @click="goBack" class="btn btn-danger-text">go back</button>
            </div>
        </form>
    </section>
</template>
  
<script>
import { gigService } from '../services/gig.service.local'

export default {
    name: 'gig-edit',
    data() {
        return {
            gigToEdit: null,
        }
    },
    created() {
        const { _id } = this.$route.params
        if (_id) {
            gigService.getById(_id).then((gig) => {
                this.gigToEdit = gig
            })
        } else this.gigToEdit = gigService.getEmptyGig()
    },
    methods: {
        goBack() {
            this.$router.push('/gig')
        },
        //   saveGig() {
        //     this.$store
        //       .dispatch({ type: 'saveGig', gig: this.gigToEdit })
        //       .then(() => {
        //         this.$router.push('/gig')
        //       })
        //   },
        saveGig() {
            gigService.save(this.gigToEdit) 
            this.$router.push('/gig')
        }
    },
}
</script>
  