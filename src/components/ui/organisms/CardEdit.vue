<template>
  <!-- TODO -->
  <!-- Make card a dynamic modal -->

  <Form title="Edit card" v-on:submit="saveCard">
    <div class="flex flex-row">
      <div class="flex flex-col w-1/2 mb-8">
        <section class="mb-4">
          <div class="flex mb-2">
            <h4>Image</h4>
            <IconButton icon="upload" name="Upload image" class="ml-2" />
          </div>
          <img class="w-3/4 rounded-section" :src="card.img" alt="Card image" />
        </section>
        <section>
          <div class="flex">
            <h4>Tags</h4>
            <IconButton icon="plus-circle" name="Add tag" class="ml-2" />
          </div>
          <p>
            Lorem ipsum dolor sit amet
          </p>
        </section>
      </div>

      <div class="flex flex-col w-1/2">
        <InputField
          class="mb-4"
          label="Title"
          v-model="cardForm.title"
          type="text"
        />
        <InputField
          class="mb-8"
          label="Description"
          v-model="cardForm.desc"
          type="text"
        />
      </div>
    </div>
    <FormButton
      class="flex mr-auto ml-auto"
      label="Save"
      type="submit"
      v-on:click="saveCard"
    />
  </Form>
</template>

<script>
import Form from '@/components/ui/atoms/Form'
import FormButton from '@/components/ui/atoms/FormButton'
import InputField from '@/components/ui/molecules/InputField'
import IconButton from '@/components/ui/molecules/IconButton'

import { mapActions } from 'vuex'

const removeProperties = (object, ...keys) =>
  Object.entries(object).reduce(
    (prev, [key, value]) => ({
      ...prev,
      ...(!keys.includes(key) && { [key]: value }),
    }),
    {}
  )

export default {
  name: 'card-edit',
  props: {
    card: {
      type: Object,
      required: true,
    },
  },
  components: {
    Form,
    FormButton,
    InputField,
    IconButton,
  },
  computed: {
    cardForm() {
      // remove the id property since it won't be edited
      return removeProperties(this.card, 'id')
    },
  },
  methods: {
    ...mapActions({
      editProperty: 'editCard',
    }),
    saveCard() {
      // get all the properties that were modified
      const modifiedProps = Object.keys(this.card).filter(
        key => this.card[key] !== this.cardForm[key]
      )

      // store only the modified values
      modifiedProps.map(prop =>
        this.$store.dispatch('board/editCard', {
          id: this.card.id,
          property: prop,
          newValue: this.cardForm[prop],
        })
      )

      this.$emit('close')
    },
  },
}
</script>
