'use strict';

var dbm;
var type;
var seed;

/**
  * We receive the dbmigrate dependency from dbmigrate initially.
  * This enables us to not have to rely on NODE_PATH.
  */
exports.setup = function(options, seedLink) {
  dbm = options.dbmigrate;
  type = dbm.dataType;
  seed = seedLink;
};

exports.up = function(db,callback) {
  const sql = `CREATE TABLE IF NOT EXISTS public.users2
  (
      email character varying COLLATE pg_catalog."default",
      firstname character varying COLLATE pg_catalog."default",
      lastname character varying COLLATE pg_catalog."default",
      age integer,
      id integer
  )`
  db.runSql(sql, (err) => {
    if(err){
      console.log(err)
    }
    callback()
  })
};

exports.down = function(db) {
  return null;
};

exports._meta = {
  "version": 1
};
