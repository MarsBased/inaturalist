import { connect } from "react-redux";

import Relationships from "../components/relationships";
import {
  updateFilters,
  sortRelationships,
  deleteRelationship,
  setRelationshipToDelete,
  setPage,
  filterRelationships
} from "../ducks/relationships";
import { showModal } from "../ducks/delete_relationship_modal";

function mapStateToProps( state ) {
  return {
    // empty array in case page loads before relationships fetched
    relationships: state.relationships.relationships || [],
    // spread filteredRelationships to refresh props when sorting results
    filteredRelationships:
      state.relationships.relationships
        ? [...state.relationships.filteredRelationships]
        : [],
    page: state.relationships.page
  };
}

function mapDispatchToProps( dispatch ) {
  return {
    updateFilters: e => { dispatch( updateFilters( e ) ); },
    sortRelationships: e => { dispatch( sortRelationships( e ) ); },
    deleteRelationship: id => { dispatch( deleteRelationship( id ) ); },
    showModal: ( id, user ) => {
      dispatch( setRelationshipToDelete( id ) );
      dispatch( showModal( user ) );
    },
    loadPage: page => {
      dispatch( setPage( page ) );
      dispatch( filterRelationships( ) );
    }
  };
}

const RelationshipsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)( Relationships );

export default RelationshipsContainer;